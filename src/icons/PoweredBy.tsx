import React from 'react';
import config from 'config';
import Box from '@mui/material/Box';
import { makeStyles } from 'tss-react/mui';
import Link from '@mui/material/Link';

const useStyles = makeStyles()((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    maxWidth: '100%',
    flexWrap: 'wrap',
    gap: '20px 4px',
  },
  partnerLogo: {
    maxHeight: theme.spacing(3),
  },
  separator: {
    display: 'flex',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  logo: {
    width: 250,
    height: 26,
  },
  logoContainer: {
    gap: 5,
  },
}));

function SeparatorSymbol(props: { color: string }) {
  const { classes } = useStyles();
  return (
    <Box className={classes.separator}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 27 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={props.color}
          d="M24.536 37.864C22.376 37.72 20.6 37.288 18.728 35.416C17.432 36.328 15.416 37.432 12.008 37.432H11.624C5.096 37.432 0.632 33.832 0.632 27.64V26.824C0.632 22.024 3.608 19.528 6.68 17.464C4.808 14.392 3.176 11.848 3.176 8.632V8.056C3.176 3.832 5.72 0.951998 11.336 0.951998H12.104C18.008 0.951998 20.024 4.072 20.024 8.056V8.248C20.024 12.136 17.864 14.92 13.64 17.992L19.016 26.728C19.448 23.992 19.688 20.872 19.688 16.6H25.448C25.4 21.784 24.536 26.872 22.616 31.24C24.2 32.392 25.592 32.392 26.888 32.536L24.536 37.864ZM9.224 8.392C9.224 10.168 9.848 11.8 11.432 14.44C13.496 11.992 14.072 10.696 14.072 8.632V8.44C14.072 6.184 13.208 5.464 11.672 5.464C10.088 5.464 9.224 6.232 9.224 8.296V8.392ZM12.632 32.536C14.024 32.536 15.032 32.248 15.848 31.72L9.032 21.16C7.928 22.456 6.824 23.896 6.824 26.344V26.584C6.824 30.04 9.032 32.536 12.632 32.536Z"
        />
      </svg>
    </Box>
  );
}

function WormholeLogo(props: { color: string }) {
  const { classes } = useStyles();
  return (
    <Box className={`${classes.container} ${classes.logoContainer}`}>
      <svg
        width="96"
        height="20"
        viewBox="0 0 206 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={props.color}
          d="M7.024 22.6V37H0.64V1.288H10.864C16.048 1.288 18.592 3.208 18.592 8.92V14.776C18.592 20.2 15.904 22.6 10.864 22.6H7.024ZM7.024 17.272H9.28C11.536 17.272 12.256 16.504 12.256 13.48V10.12C12.256 7.24 11.536 6.376 9.28 6.376H7.024V17.272ZM30.2151 37.48C24.3111 37.48 21.9591 34.312 21.9591 29.56V18.232C21.9591 13.384 24.4551 10.312 30.2151 10.312H31.2231C36.6471 10.312 39.4791 13.24 39.4791 18.232V29.56C39.4791 34.36 36.6471 37.48 31.2231 37.48H30.2151ZM30.6951 32.536C32.5671 32.536 33.3351 31.24 33.3351 29.32V18.472C33.3351 16.312 32.4711 15.256 30.6951 15.256C28.9671 15.256 28.1031 16.312 28.1031 18.472V29.32C28.1031 31.384 28.9191 32.536 30.6951 32.536ZM56.908 20.824C56.716 22.12 56.38 23.896 55.468 27.928L53.5 37H47.788L42.268 10.792H48.316L49.9 20.296C50.668 24.616 50.908 26.2 51.148 28.12C51.388 26.296 51.772 24.52 52.684 20.248L54.556 10.792H59.644L61.612 20.248C62.524 24.472 62.812 26.296 63.052 28.12C63.292 26.248 63.532 24.76 64.3 20.296L65.932 10.792H71.452L66.172 37H60.364L58.396 27.928C57.484 23.896 57.148 22.12 56.908 20.824ZM80.1288 20.44H85.2648V17.8C85.2648 15.832 84.4008 14.872 82.6728 14.872C80.9928 14.872 80.1288 15.832 80.1288 17.8V20.44ZM91.0248 29.944C91.0248 34.984 88.3368 37.48 82.9128 37.48H82.0488C77.0088 37.48 74.2248 34.792 74.2248 29.944V17.848C74.2248 13.048 76.8648 10.312 82.1928 10.312H83.1528C88.0008 10.312 91.0248 12.52 91.0248 18.04V24.664H80.1288V29.608C80.1288 31.288 80.8008 32.536 82.6728 32.536C84.4008 32.536 85.1688 31.336 85.1688 29.656V27.352H91.0248V29.944ZM101.796 37H95.7003V10.792H101.7V13.768C102.084 13.24 103.524 10.6 106.74 10.6H106.932C110.34 10.6 111.588 12.856 111.588 16.168V23.224H105.78V18.328C105.78 16.264 105.3 15.496 103.812 15.496C102.324 15.496 101.796 16.408 101.796 18.328V37ZM121.332 20.44H126.468V17.8C126.468 15.832 125.604 14.872 123.876 14.872C122.196 14.872 121.332 15.832 121.332 17.8V20.44ZM132.228 29.944C132.228 34.984 129.54 37.48 124.116 37.48H123.252C118.212 37.48 115.428 34.792 115.428 29.944V17.848C115.428 13.048 118.068 10.312 123.396 10.312H124.356C129.204 10.312 132.228 12.52 132.228 18.04V24.664H121.332V29.608C121.332 31.288 122.004 32.536 123.876 32.536C125.604 32.536 126.372 31.336 126.372 29.656V27.352H132.228V29.944ZM145.303 32.392C147.175 32.392 147.895 31.144 147.895 29.032V18.76C147.895 16.648 147.175 15.4 145.303 15.4C143.575 15.4 142.807 16.648 142.807 18.76V29.032C142.807 31.288 143.623 32.392 145.303 32.392ZM153.991 0.663999V37H147.895V34.024C147.223 35.224 145.831 37.24 142.711 37.24H142.615C138.919 37.24 136.663 34.6 136.663 30.376V17.128C136.663 13.24 138.583 10.6 142.279 10.6H142.423C145.783 10.6 147.271 12.52 147.895 13.432V0.663999H153.991ZM172.39 0.663999V13.624C173.062 12.712 174.79 10.6 177.814 10.6H178.006C181.606 10.6 183.67 12.856 183.67 16.84V30.136C183.67 34.408 181.222 37.24 177.19 37.24H177.094C173.638 37.24 171.958 34.84 171.286 33.64C170.95 34.744 170.758 36.232 170.614 37H166.294V0.663999H172.39ZM174.982 32.392C176.518 32.392 177.478 31.384 177.478 29.08V18.904C177.478 16.552 176.662 15.352 174.982 15.352C173.254 15.352 172.39 16.552 172.39 18.904V29.032C172.39 31.384 173.494 32.392 174.982 32.392ZM187.602 40.84H191.058C192.258 40.84 192.642 40.552 192.786 39.64L192.882 39.016C193.026 38.008 192.978 37.384 192.45 35.368L186.69 10.792H192.882L196.098 28.792L199.218 10.792H205.122L198.45 41.56C197.826 44.44 196.578 45.976 193.554 45.976H187.602V40.84Z"
        />
      </svg>
      <Link
        href="https://wormhole.com/products/connect"
        sx={{ height: '20px' }}
        target="_blank"
      >
        <svg
          width="150"
          height="20"
          viewBox="0 0 427 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_6_2)">
            <path
              d="M324.218 0H304.197C296.504 0 290.272 6.2348 290.272 13.9324V26.0674C290.272 33.7652 296.504 40 304.197 40H324.693V39.9792C332.163 39.7283 338.146 33.605 338.146 26.0675V13.9325C338.146 6.2348 331.914 0 324.218 0ZM322.06 33.3543H306.356V6.64579H322.06V33.3543ZM101.822 0H81.8014C74.1066 0 67.8743 6.2348 67.8743 13.9324V26.0674C67.8743 33.7652 74.1066 40 81.8014 40H102.295V39.9792C109.767 39.7283 115.749 33.605 115.749 26.0675V13.9325C115.749 6.2348 109.517 0 101.822 0ZM99.6631 33.3543H83.9601V6.64579H99.6631V33.3543ZM213.873 6.96621H213.88L202.251 27.1124V0H194.194C189.215 0 184.619 2.65414 182.133 6.96621L165.281 36.1616L157.865 23.3159C163.192 23.2532 167.496 18.9133 167.496 13.5701V9.75269C167.496 4.36779 163.129 0 157.746 0H119.621V40H135.707V23.3229H139.3L148.924 40H170.497L186.165 12.8457V40H202.251V39.986L217.849 12.9572V40H233.935V0H225.934C220.955 0 216.359 2.65414 213.873 6.96621ZM151.41 16.6771H135.707V6.64579H151.41V16.6771ZM270.215 0H286.301V40H270.215V23.3229H254.513V40H238.427V0H254.513V16.6771H270.215V0ZM358.201 33.3543H378.967V40H356.042C348.346 40 342.115 33.7652 342.115 26.0674V0H358.201V33.3543ZM399.188 6.64574V16.6771H421.2V23.3229H399.188V33.3543H427V40H383.102V0H427V6.64579L399.188 6.64574ZM70.8756 0L51.8091 33.0338C49.3232 37.3458 44.7273 40 39.7482 40H31.6914V12.8875L20.0621 33.0338C17.5761 37.3458 12.9802 40 8.00116 40H0V0H16.0929V27.0428L31.6914 0.0139053V0H47.7772V27.1543L63.4453 0H70.8756Z"
              fill={props.color}
            />
          </g>
          <defs>
            <clipPath id="clip0_6_2">
              <rect width="427" height="40" fill={props.color} />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </Box>
  );
}

function PartnerLogo(props: { src: string }) {
  const { classes } = useStyles();
  return <img src={props.src} alt="partner" className={classes.partnerLogo} />;
}

function PoweredByIcon(props: { color: string }) {
  const { classes } = useStyles();
  return config.ui.partnerLogo ? (
    <Box className={classes.container}>
      <WormholeLogo color={props.color} />
      <SeparatorSymbol color={props.color} />
      <PartnerLogo src={config.ui.partnerLogo} />
    </Box>
  ) : (
    <WormholeLogo color={props.color} />
  );
}

export default PoweredByIcon;