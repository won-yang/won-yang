import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ListWrapper = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListItems = styled.li`
  height: 50px;
  padding-left: 20px;
  border-bottom: 1px solid;
  & a {
    width: 100%;
    cursor: pointer;
    display: inline-block;
    height: 100%;
    line-height: 50px;
    /* dragging block */
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export const NickNameDisplayWrapper = styled.div`
  position: relative;
  min-height: 100px;
  padding: 20px;
  background-color: ${(props) => props.theme.primary};
`;

export const NickName = styled.span`
  display: inline-block;
  position: absolute;
  top: 100%;
  padding-bottom: 10px;
  transform: translate(0, -100%);
  font-size: 20px;
  color: white;
`;
