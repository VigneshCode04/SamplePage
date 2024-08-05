import React from 'react';
import './sample.css';

import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

import { useState } from 'react';

import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
  import Typography from '@mui/material/Typography';
  
  let theme = createTheme();
  theme = responsiveFontSizes(theme);




const AppSample = ({ searchQuery }) => {
  const apps = [

    { name: 'Finance', url: 'https://swireconnect.com' ,icon:<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/investment.png" alt="investment"/>},
    { name: 'Operations', url: 'https://elearning.com',icon:<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/workflow.png" alt="workflow"/> },
    { name: 'Human Resources', url: 'https://zoom.us' ,icon:<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/businesswoman--v2.png" alt="businesswoman--v2"/>},
    { name: 'Customer Success', url: 'https://riskregister.com' ,icon:<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/customer-insights-manager.png" alt="customer-insights-manager"/>},
    { name: 'Data', url: 'https://itselfservice.com' ,icon:<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/combo-chart.png" alt="combo-chart"/>},
    { name: 'Finlays', url: 'https://giftsandhospitality.com' ,icon:<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/cloud-development.png" alt="cloud-development"/>},
    { name: 'SS Knowledge Base', url: 'https://ssknowledgebase.com' ,icon:<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/reading.png" alt="reading"/> },
    { name: 'Corporate Philanthropy', url: 'https://corporatephilanthropy.com'  ,icon:<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/company.png" alt="company"/>},
    { name: 'Atlassian Cloud Jira SAML', url: 'https://jira.atlassian.com'  ,icon:<img width="48" height="48" src="https://img.icons8.com/color/48/atlassian-confluence.png" alt="atlassian-confluence"/>}
  ];
    const filteredApps = apps.filter(app => app.name.toLowerCase().includes(searchQuery.toLowerCase()));
    console.log(filteredApps);
  return (
    <div className="app-container" style={{margin:'10px'}}>
     
      <Typography variant="h4">K2 Workspace</Typography>
      <br/>
      <div className="app-wrapper">
      <div className="apps-grid">
        {filteredApps.map((app, index) => (
          <div key={index} className="app-card" onClick={() => window.location.href = app.url}>
            {/* <div className="app-icon">⚙️</div> */}
            <div className="app-icon">{app.icon}</div>
            <div className="app-name"><Typography variant='h7'>{app.name}</Typography></div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AppSample;
