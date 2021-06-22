import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  overflow: scroll;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: transparent linear-gradient(90deg, #000000 0%, #171717 100%) 0% 0% no-repeat padding-box;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 1s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
