import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 50%
`;

export const WrapperTabsList = styled(TabList)`
    list-style: none;
    display: flex;
    padding: 4px;
    margin: 20px 0 0 0;
    color: white;
    font-size: 17px;
    
    *:first-child {
        margin: 0 12px 0 0;
    }
    *:last-child {
        margin: 0 0 0 12px;
    }
`;

WrapperTabsList.TabsRole = 'tablist';

export const WrapperTab = styled(Tab)`
    padding: 6px 25px 6px 25px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    background: #14141f;
    border: 1px solid #424242;
    border-radius: 14px;
    transition: .3s;
    box-shadow: 2px 2px 4px black;
    
    :focus {
        outline: none;
        box-shadow: 5px 0px 10px #14141f;

    }

    &.is-selected {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        border-bottom: 1px solid transparent;    
    }
`;

WrapperTabsList.TabsRole = 'tab';

export const WrapperTabPanel = styled(TabPanel)`
    color: white;
    display: none;
    min-height: 40vh;
    padding: 30px;
    margin-top: -5px;

    &.is-selected {
        display: block;
        background: #14141f;
        margin-left: 3px;
        border: 1px solid #424242;
        z-index: 9999;
        width: 92vw;
    }
`;

WrapperTabsList.TabsRole = 'tabpanel';

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;