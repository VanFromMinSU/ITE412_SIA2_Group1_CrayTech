# Messaging Middleware Prototype

## Purpose

This middleware prototype demonstrates asynchronous communication between the Product and Order Management module and the Notification and Reporting module.

## Producer

Order Management Module

Creates order messages and places them in the queue.

## Consumer

Notification and Reporting Module

Retrieves queued order messages and processes customer notifications.

## Workflow

Customer
→ Order Management
→ Message Queue
→ Notification Module
→ Notification Sent