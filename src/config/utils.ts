import { TokensConfig, ChainsConfig, TokenAddressesByChain } from './types';
import { Chain } from '@wormhole-foundation/sdk';
import { NttRoute } from '@wormhole-foundation/sdk-route-ntt';
import { DefaultInputs } from './ui';

const error = (msg: string) => {
  console.error(`Wormhole Connect: ${msg}`);
};

export const populateRpcField = (chain: Chain, rpc: string | undefined) => {
  if (!rpc) return {};
  return { [chain]: rpc };
};

/*
const info = (msg: string) => {
  console.info(`Wormhole Connect: ${msg}`);
};

export const validateResourceMap = (map: ChainResourceMap) => {
  if (!config || !config[field]) {
    info(
      `No custom ${field} endpoints provided. We recommended that you configure your own ${field} endpoints for the best performance.`,
    );
    return;
  }
  const defaultResourceMap = config.networkData[field];
  const resourceMap = config[field]!;
  const chains = Object.keys(config.chains) as ChainName[];
  for (const chain of chains) {
    if (resourceMap[chain] === defaultResourceMap[chain]) {
      info(
        `No custom ${field} endpoint provided for ${chain}. We recommended that you provide your own ${field} endpoint for the best performance.`,
      );
    }
  }
};
*/

/*
export const validateChainResources = () => {
  validateResourceMap('rpcs');
  validateResourceMap('rest');
};
*/

export const mergeCustomTokensConfig = (
  builtin: TokensConfig,
  custom?: TokensConfig,
): TokensConfig => {
  if (!custom) return builtin;

  const builtinTokens = Object.values(builtin);
  const builtinKeys = builtinTokens.map((tk) => tk.key);

  customTokensLoop: for (const key in custom) {
    // Verify that custom token config does not conflict with any built-in tokens
    const customToken = custom[key];
    if (key in builtin) {
      console.warn(
        `Skipping custom token config for "${key}" because it conflicts with a built-in`,
      );
      continue;
    }
    // Verify that custom token config (chain, symbol) tuple does not conflict with any built-in tokens
    for (const bt of Object.values(builtin)) {
      if (
        bt.nativeChain === customToken.nativeChain &&
        bt.symbol === customToken.symbol
      ) {
        console.warn(
          `Skipping custom token config for "${key}" because its symbol "${customToken.symbol}" and chain ${customToken.nativeChain} conflicts with a built-in`,
        );
        continue customTokensLoop;
      }
    }
    if (builtinKeys.includes(customToken.key)) {
      console.warn(
        `Skipping custom token config for "${key}" because its key "${customToken.key}" conflicts with a built-in`,
      );
      continue;
    }

    // Accept custom token config
    console.info(`Accepted custom token config for "${key}"`);
    builtin[key] = customToken;
  }

  return builtin;
};

export const mergeCustomWrappedTokens = (
  builtin: TokenAddressesByChain,
  custom?: TokenAddressesByChain,
): TokenAddressesByChain => {
  if (!custom) return builtin;

  for (const key in custom) {
    builtin[key] = {
      ...custom[key],
      // Prevent overwriting built-in wrapped token addresses
      ...builtin[key],
    };
  }

  return builtin;
};

export const mergeNttConfig = (
  tokens: TokensConfig,
  builtin: NttRoute.Config,
  custom?: NttRoute.Config,
) => {
  if (!custom) return builtin;

  for (const key in custom.tokens) {
    if (key in builtin.tokens) {
      console.warn(
        `Skipping custom NTT config for "${key}" because it conflicts with a built-in`,
      );
      continue;
    }

    const tokenConfig = custom.tokens[key];
    // if any of the managers in the custom config exist in the built-in config, skip
    if (
      tokenConfig.some(({ chain, manager }) =>
        Object.values(builtin.tokens).some((builtinConfig) =>
          builtinConfig.some(
            (cfg) => chain === cfg.chain && manager === cfg.manager,
          ),
        ),
      )
    ) {
      console.warn(
        `Skipping custom NTT config for "${key}" because it conflicts with a built-in`,
      );
      continue;
    }

    // if any of the tokens in the custom config don't exist in the tokens config, skip
    if (
      !tokenConfig.every(({ chain, token }) =>
        Object.values(tokens).some(
          (tk) => tk.nativeChain === chain && tk.tokenId?.address === token,
        ),
      )
    ) {
      console.warn(
        `Skipping custom NTT config for "${key}" because it references a token that does not exist`,
      );
      continue;
    }

    // if any of the chains in the custom config are duplicated, skip
    if (
      new Set(tokenConfig.map((cfg) => cfg.chain)).size !== tokenConfig.length
    ) {
      console.warn(
        `Skipping custom NTT config for "${key}" because it contains duplicate chains`,
      );
      continue;
    }

    console.info(`Accepted custom NTT config for "${key}"`);
    builtin.tokens[key] = tokenConfig;
  }

  return builtin;
};

export const validateDefaults = (
  defaults: DefaultInputs,
  chains: ChainsConfig,
  tokens: TokensConfig,
) => {
  if (!defaults) return;
  if (defaults.fromChain) {
    const chain = chains[defaults.fromChain];
    if (!chain) {
      error(
        `Invalid chain name "${defaults.fromChain}" specified for defaultInputs.fromChain`,
      );
      delete defaults.fromChain;
    }
  }
  if (defaults.toChain) {
    const chain = chains[defaults.toChain];
    if (!chain) {
      error(
        `Invalid chain name "${defaults.toChain}" specified for defaultInputs.toChain`,
      );
      delete defaults.fromChain;
    }
  }
  if (defaults.fromChain && defaults.toChain) {
    if (defaults.fromChain === defaults.toChain) {
      error(
        `Source and destination chain cannot be the same, check the defaultInputs configuration`,
      );
    }
  }

  if (defaults.fromChain && defaults.toChain && defaults.requiredChain) {
    const requiredConfig = chains[defaults.requiredChain];
    if (!requiredConfig) {
      error(
        `Invalid network value "${defaults.requiredChain}" specified for defaultInputs.requiredChain`,
      );
    }
    if (
      defaults.toChain !== defaults.requiredChain &&
      defaults.fromChain !== defaults.requiredChain
    ) {
      error(
        `Source chain or destination chain must equal the required network`,
      );
    }
  }

  if (defaults.tokenKey) {
    const tokenConfig = tokens[defaults.tokenKey];
    if (!tokenConfig) {
      error(
        `Invalid token "${defaults.tokenKey}" specified for defaultInputs.tokenKey`,
      );
      delete defaults.tokenKey;
    }
  }

  if (defaults.fromChain && defaults.tokenKey) {
    const chain = chains[defaults.fromChain]!;
    const { tokenId, nativeChain } = tokens[defaults.tokenKey]!;
    if (!tokenId && nativeChain !== chain.key) {
      error(
        `Invalid token "${defaults.tokenKey}" specified for defaultInputs.tokenKey. It does not exist on "${defaults.fromChain}"`,
      );
    }
  }
  return defaults;
};

/*
export const validateRoutes = () => {
  if (config.routes.length === 0) {
    error('You must enable at least 1 transfer route');
  }
};

export const validateConfigs = () => {
  validateRoutes();
  validateChainResources();
};
*/

export const capitalize = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1);
};