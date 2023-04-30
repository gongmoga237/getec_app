import { Box, List, ListItem } from "@chakra-ui/react";
import { LoaderArgs, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderArgs) => {
  return json(null);
};

export default function UserPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <Box>
      <List>
        {data.map(({ id, firstname, lastname }) => (
          <ListItem key={id}>{`${firstname} ${lastname}`}</ListItem>
        ))}
      </List>
    </Box>
  );
}
