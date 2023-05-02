import { Search2Icon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ActionFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";

export const action: ActionFunction = ({ request }) => {
  const formData = request.formData();

  console.log(formData);

  return request.formData();
};

export default function SearchForm() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action="search">
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="Etes vous à la recherche d'une pharmacie ou d'un hopital près de chez vous?"
        />
        <InputRightElement>
          <IconButton aria-label="Search button" type="submit">
            <Search2Icon />
          </IconButton>
        </InputRightElement>
      </InputGroup>
    </fetcher.Form>
  );
}
