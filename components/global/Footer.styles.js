import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  margin: 96px;
  @media (max-width: 700px) {
    margin: 64px 96px 64px 96px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  filter: var(--color-invert);
`;

export const Gap = styled.div`
  padding-left: 48px;
`;

export const Logo = styled.img`
  transform: scale(1.6);
`;
