import { Box, Button, Typography } from "@mui/material";
import { getProviders, signIn } from "next-auth/react";

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default function Login(props) {
  return (
    <>
      <Box>
        <Typography>Login Page</Typography>
        {Object.values(props.providers).map((provider) => (
          <Button
            variant="contained"
            key={provider.name}
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </Button>
        ))}
      </Box>
    </>
  );
}
