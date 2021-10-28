import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const LogoWrapper = styled.a`
  font-size: 1.3rem;
`;

const Logo = ({ logoVariation, height }) => {
  return (
    <Link href="/" passHref>
      <LogoWrapper>
        <Image
          src={`/pistios_logo_${logoVariation}.png`}
          alt="Pistios logo"
          width={height * 2.29}
          height={height}
        />
      </LogoWrapper>
    </Link>
  );
};

Logo.propTypes = {
  logoVariation: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default Logo;
