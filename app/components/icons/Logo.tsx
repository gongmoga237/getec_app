import { Text, useBreakpointValue, Image, AspectRatio } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import logo from "~/assets/logo.png";
import { HOME } from "~/constants/navigation";

export default function Logo() {
  return (
    <AspectRatio ratio={2 / 1} w="10rem" overflow="hidden">
      <Link to={HOME}>
        <Image
          src={logo}
          alt="Getec logo."
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Link>
    </AspectRatio>
  );
}
