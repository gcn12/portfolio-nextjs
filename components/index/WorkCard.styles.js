import styled from "styled-components";

export const Container = styled.div`
  transition: opacity 0.7s ease-out;
  opacity: ${(props) => props.opacity};
  /* margin: 0 10vw; */
  background-image: linear-gradient(
    ${(props) => props.workItem.colorDirection},
    ${(props) =>
      props.isLightMode
        ? props.workItem.light.colorOne
        : props.workItem.dark.colorOne},
    ${(props) =>
      props.isLightMode
        ? props.workItem.light.colorTwo
        : props.workItem.dark.colorTwo}
  );
  border-radius: 30px;
  margin: 20px 0;
  padding: 50px;
  border: 1px solid rgba(100, 100, 100, 0.1);
  @media (max-width: 800px) {
    border-radius: 20px;
  }
  @media (max-width: 600px) {
    margin: 20px -5vw;
  }
  @media (max-width: 500px) {
    border-radius: 15px;
    padding: 30px;
  }
`;

export const ProjectName = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1.25rem;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const ProjectDescription = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 2.25rem;
  margin: 0.8px 0 32px 0;
  @media (max-width: 1100px) {
    margin: 8px 0 16px 0;
  }
  @media (max-width: 500px) {
    font-size: 1.75rem;
  }
`;

export const Grid = styled.div`
  min-height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  align-content: center;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const OrangeButton = styled.a`
  font-size: 1rem;
  font-weight: 400;
  padding: 16px 24px;
  border: none;
  /* background-color: var(--color-accent); */
  color: var(--color-text-inverted);
  border-radius: 10px;
  cursor: pointer;
  transition: background-image 500ms ease-in-out;
  background-image: linear-gradient(
    to bottom right,
    var(--color-accent),
    var(--color-accent-light),
    var(--color-accent-light)
  );
  background-color: transparent;
  /* &:hover {
		background-image: linear-gradient(
			to bottom left,
			var(--color-accent),
			var(--color-accent-light),
			var(--color-accent-light)
		);
	} */
  visibility: ${(props) =>
    props.screenSize === "small" ? "hidden" : "visible"};
  display: ${(props) =>
    props.screenSize === "small" ? "none" : "inline-block"};
  @media (max-width: 1100px) {
    visibility: ${(props) =>
      props.screenSize === "large" ? "hidden" : "visible"};
    display: ${(props) =>
      props.screenSize === "large" ? "none" : "inline-block"};
    max-width: 60vw;
    height: auto;
    margin-top: 48px;
    font-size: 0.875rem;
  }
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
  position: relative;
  z-index: 1;

  &::before {
    color: var(--color-text-inverted);
    border-radius: 10px;
    position: absolute;
    background-image: linear-gradient(
      to top left,
      var(--color-accent),
      var(--color-accent-light),
      var(--color-accent-light)
    );
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    z-index: -1;
    opacity: 0;
    transition: 400ms ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const PreviewImage = styled.img`
  height: 250px;
  width: auto;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
  justify-self: center;
  @media (max-width: 1100px) {
    height: auto;
    width: 100%;
  }
`;

export const LazyDiv = styled.div`
  @media (min-width: 1100px) {
    visibility: "hidden";
    display: none;
  }
`;
