import { V2_MetaFunction } from "@remix-run/react";
import { APP_NAME } from "~/constants/app";
import { GridItem, Heading, Box, Divider, Text } from "@chakra-ui/react";

import { hospitals, pharmacy } from "~/data";
import HospitalCard from "~/components/cards/HospitalCard";
import PharmacyCard from "~/components/cards/PharmacyCard";

// Assets
import homeHeroBg from "~/assets/home_hero_bg.jpg";
import pharmacy2Img from "~/assets/pharmacy2.jpg";
import SearchForm from "~/components/forms/SearchForm";

export const meta: V2_MetaFunction = () => [
  {
    title: `Home - ${APP_NAME}`,
  },
];

export default function AppIndexPage() {
  return (
    <>
      <Box
        bgImage={homeHeroBg}
        bgSize="cover"
        h="90vh"
        bgClip="border-box"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
      >
        <Box
          display="grid"
          gap="4rem"
          h="100%"
          bgColor="blackAlpha.600"
          placeContent="center"
          color="white"
        >
          <Heading as="h1" textAlign="center" display="grid" mb="0">
            <Text as="span">Nous vous souhaitons la bienvenue au</Text>
            <Text
              as="span"
              letterSpacing="widest"
              w="100%"
              color="brand.500"
              fontSize="1.5em"
              mt="6"
            >
              GETEC
            </Text>
          </Heading>

          <Text textAlign="center" fontSize="xl">
            Une application de <Text as="b">Télémédecine</Text> et de{" "}
            <Text as="b">Télésanté</Text>
          </Text>

          <Box placeSelf="center">
            <SearchForm />
          </Box>
        </Box>
      </Box>

      <Box p="4">
        <Heading as="h2" fontSize="2xl" my="6">
          Les hopitaux qui se trouvent autour de vous.
        </Heading>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(15rem, 1fr))",
          }}
          gap="4"
        >
          {hospitals.map((hospital, index) => {
            return (
              <GridItem key={"home_hospital" + index} w="100%">
                <HospitalCard {...hospital} />
              </GridItem>
            );
          })}
        </Box>
      </Box>

      <Divider my="6" />

      <Box p="4">
        <Heading as="h2" fontSize="2xl" mb="6">
          Les pharmacies qui se trouvent autour de vous.
        </Heading>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(15rem, 1fr))",
          }}
          gap="4"
        >
          {pharmacy.map((pharmacy, index) => {
            return (
              <GridItem key={"home_pharmacy" + index} w="100%">
                <PharmacyCard
                  {...{ ...pharmacy, image: pharmacy.image || pharmacy2Img }}
                />
              </GridItem>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
