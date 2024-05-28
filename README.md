# React Device Data

I initialized this application using Vite to create a React application, it includes TypeScript as its development language

The application contains two pages, one for displaying the list of devices which can be clicked and the 2nd includes that device data

# Api's used

https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/listDevices - List of devices

https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/device/{DeviceID} - Single device

# How to run

To run this application simply

- Clone/Download this repository
- Run npm install
- Run npm run dev
- Open your web browser at http://localhost:5173/

Due to time constraints for this task I decided on prioritising completing the task and finishing functionality rather than styling, hence used some basic bootstrap

In a real production environment I would have used my preferred styling method however here I have used basic css to make the display of data presentable

I would have also created interfaces for the data retrieved and unit tests for retrieving from the API but I did not have time
