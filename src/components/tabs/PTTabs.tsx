import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ReactNode, SyntheticEvent, useState } from "react";
import styled from "@emotion/styled";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const numbers = ["1", "2", "3"];

export const PTTabs = () => {
  const [value, setValue] = useState(0);
  const [number, setNumber] = useState(numbers[value]);
  let selectedValue;

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleValueChange: any = (v: string) => {
    selectedValue = v;
    setNumber(numbers[value]);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab onClick={handleValueChange("Item One")} label="Item One" />
            <Tab onClick={handleValueChange("Item Two")} label="Item Two" />
            <Tab onClick={handleValueChange("Item Three")} label="Item Three" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
      <StyledSelectedValue>
        Selected value is: {selectedValue}
      </StyledSelectedValue>
      <StyledSelectedValue>Selected number is: {number}</StyledSelectedValue>
    </>
  );
};

const StyledSelectedValue = styled.div`
  margin: 50px;
  text-align: center;
  font-size: 48px;
`;
