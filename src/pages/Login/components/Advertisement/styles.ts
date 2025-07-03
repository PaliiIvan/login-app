import styled from "styled-components";

export const AdvertisementContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AdvertisementCard = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.active ? 2 : 1)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

export const AdvertisementContainerText = styled.div`
  min-height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  z-index: 2;
  background: #7c7c7c5e;
  backdrop-filter: blur(3.3px);
  -webkit-backdrop-filter: blur(7.3px);
  max-width: 70%;
  border-radius: 2rem;
  padding: 2rem 4rem;
  color: white;
`;

export const AdvertisementContainerTextTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
`;

export const AdvertisementContainerTextDescription = styled.div`
  font-size: 1rem;
`;

export const AdvertisementContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  img {
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 1024px) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;
