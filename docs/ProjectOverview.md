# Project Overview

## 1. System Objectives

The project aims to help Mamen's Redclaw Aquafarm monitor crayfish farming conditions through IoT technology while providing an e-commerce platform for product sales and customer engagement.

## 2. Proposed Scope

### Modules to Integrate

- User Authentication
- IoT Monitoring System
- Product Catalog
- Order Management
- Admin Dashboard
- Reporting Module

### In Scope

- User and admin accounts
- Monitoring of aquafarm conditions
- Product listing and ordering
- Basic reports and dashboards

### Out of Scope

- Online payment gateway integration
- Delivery tracking system

## 3. Stakeholders

### Owner/Admin

Needs real-time monitoring of farm conditions and management of online sales.

### Customers

Need an easy way to browse and purchase crayfish products.

## 4. Tools & Technologies

### Frontend

- React
- Vite
- TypeScript (TSX)
- Tailwind CSS

### Backend

- Laravel
- PHP

### Database

- MySQL

### IoT

- ESP32

### IoT Sensors

- DS18B20 – Temperature Sensor
- pH Sensor
- Ammonia Sensor
- MAX471 – Voltage Sensor
- MAX471 – Current Sensor

### Actuators/Controls

- MG996R Servo Motor – Feeder
- 12V Feed Scattering Motor
- 12V Solenoid Valve – Water Refill
- 5V Aerator

### IoT/Realtime Platform

- Firebase Realtime Database

### RTC

- DS3231 RTC Module

### API

- REST API

### Notifications

- SMS Gateway
- Laravel Backend Email Notification

### Testing Tools

- Postman

### Repository/Version Control

- GitHub

## 5. High-Level System Overview

### 5.1 Major Modules/Subsystems

_User Authentication_ – Handles the authentication of Owner/Admin and customers, including login and registration information.

_IoT Monitoring and Device Management_ – Handles sensor readings and device status from the ESP32 and connected IoT sensors. It provides monitoring data and device control functions for the aquafarm.

_Feeding and Automation Management_ – Manages feeding schedules and automation commands. It controls devices such as the feeder, feed scattering motor, water refill solenoid valve, and aerator. The DS3231 RTC module supports scheduled operations.

_Product and Order Management_ – Handles product browsing, product information, customer orders, order confirmations, and order status updates.

_Notification and Reporting_ – Handles system alerts, notifications, and reports for the Owner/Admin. It can send notification requests through the SMS Gateway and email notifications through the Laravel backend.

### 5.2 External Systems/Interfaces

_REST API_ – Provides communication between the React frontend and Laravel backend for exchanging application data and requests.

_MySQL_ – Serves as the main application database for storing user accounts, feeding schedules, product information, order information, and other system records.

_Firebase Realtime Database_ – Serves as the IoT/realtime platform for handling real-time sensor and device data.

_ESP32 and IoT Sensors/Devices_ – The ESP32 collects data from the connected sensors and controls the connected actuators. The system uses the DS18B20 temperature sensor, pH sensor, ammonia sensor, MAX471 voltage sensor, and MAX471 current sensor.

_SMS Gateway_ – Provides external SMS services for sending system alerts and notifications. The system sends notification requests to the SMS Gateway and receives notification delivery status.

_Laravel Backend Email Notification_ – Provides email notification functionality for system-related notifications.

_Postman_ – Used to test and verify REST API endpoints and backend functionality during development.

### 5.3 Data Flow Summary

The CRAYTECH system receives data from Owner/Admin, customers, and IoT sensors/devices. Owner/Admin and customers provide authentication information and requests through the web application. These requests are processed by the appropriate system modules through the REST API and Laravel backend.

The ESP32 collects sensor readings from the connected IoT sensors and provides device status information. The IoT Monitoring and Device Management module processes this information and uses Firebase Realtime Database to support real-time IoT data.

Feeding schedules are handled by the Feeding and Automation Management module. The module sends automation and feeding commands to the connected actuators, including the MG996R servo motor feeder, feed scattering motor, water refill solenoid valve, and aerator. The DS3231 RTC module supports scheduled operations.

For e-commerce functions, customers browse products and submit orders through the Product and Order Management module. Product and order information is stored in MySQL and is used to provide product information, order confirmations, and order status updates.

Sensor data, feeding status, and other system events are processed by the Notification and Reporting module when alerts or reports are required. Notifications can be sent through the SMS Gateway and Laravel backend email notification system, while reports and system information are provided to the Owner/Admin.

## 6. Integration Pattern Applied

### Integration Pattern

**Hub-Spoke**

### Rationale

CRAYTECH uses the Hub-Spoke integration pattern because the Laravel backend and REST API serve as the central hub that coordinates communication between the system modules. The User Authentication, IoT Monitoring and Device Management, Feeding and Automation Management, Product and Order Management, and Notification and Reporting modules communicate through the central backend. This centralized approach allows the system to manage application requests and data exchanges without requiring every module to communicate directly with the other modules.

### Diagram Reference

The high-level architecture diagram for the Hub-Spoke integration pattern is:

`docs/HighLevelArch.png`

## 7. Messaging Workflow

CRAYTECH uses a producer-consumer messaging workflow to support communication between the Product and Order Management module and the Notification and Reporting module.

The Order Management module acts as the producer. Whenever a customer places an order, an order message containing customer and order information is added to a message queue.

The Notification and Reporting module acts as the consumer. It retrieves queued order messages asynchronously and processes notifications such as order confirmations and status updates.

This messaging approach reduces direct dependencies between modules and improves integration flexibility by allowing notifications to be processed independently from order creation.
