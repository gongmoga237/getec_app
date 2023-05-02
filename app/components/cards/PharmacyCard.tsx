import { PhoneIcon, AtSignIcon, PlusSquareIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Stack,
  Image,
  Divider,
  ButtonGroup,
  CardFooter,
  Text,
  Button,
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  VStack,
  UnorderedList,
  ListItem,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  AspectRatio,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { Pharmacie } from "~/types";

export default function HospitalCard({
  availableDrugs,
  email,
  image,
  name,
  telephone,
}: Pharmacie) {
  return (
    <Card maxW="sm" role="group">
      <CardBody>
        <AspectRatio
          ratio={16 / 9}
          borderRadius="lg"
          overflow="hidden"
          minW="100%"
        >
          {image ? (
            <Image
              src={image}
              alt={name}
              objectFit="cover"
              _groupHover={{ transform: "scale(1.1)" }}
              transition=".5s ease-in-out"
            />
          ) : (
            <Box w="100%" h="100%" bgColor="gray.400" />
          )}
        </AspectRatio>

        <Stack mt="6" spacing="3">
          <Text fontSize="md" fontWeight="bold" h="2lh" noOfLines={2}>
            {name}
          </Text>
        </Stack>
      </CardBody>

      <Divider color="blue.200" />

      <CardFooter>
        <ButtonGroup
          flexWrap="wrap"
          gap="6"
          placeContent="center"
          fontSize="xs"
        >
          <Popover>
            <PopoverTrigger>
              <Button variant="outline" colorScheme="blue" gap="2">
                <PlusSquareIcon /> Détails
              </Button>
            </PopoverTrigger>

            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>
                Détails sur la pharmacie{" "}
                <Text as="span" fontWeight="bold">
                  {name}
                </Text>
              </PopoverHeader>
              <PopoverBody>
                <VStack p="6" gap="1" placeItems="flex-start" pl="10">
                  <Text>
                    <PhoneIcon /> Téléphone:{" "}
                    <Text as="span" fontWeight="bold">
                      {telephone}
                    </Text>
                  </Text>

                  <Text>
                    <AtSignIcon /> Email:{" "}
                    <Text as="span" fontWeight="bold">
                      {email}
                    </Text>
                  </Text>

                  <Box>
                    <Text fontSize="lg" fontWeight="bold">
                      Les médicaments disponibles
                    </Text>
                    <UnorderedList>
                      {availableDrugs.map((drug, index) => {
                        return (
                          <ListItem key={"Hospital_service_card" + index}>
                            <Text>{drug}</Text>
                          </ListItem>
                        );
                      })}
                    </UnorderedList>
                  </Box>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Button
            as={Link}
            to={"hospital/location"}
            variant="link"
            colorScheme="blue"
          >
            Y aller
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
