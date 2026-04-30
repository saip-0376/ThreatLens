# ThreatLens


## Overview
ThreatLens is a minimal SIEM-inspired system that performs log collection, anomaly detection, and basic AI-based threat explanation.

## Features
- Log monitoring system
- Anomaly detection (ML service)
- AI-style explanation layer
- Dockerized microservices
- Linux-based log tracking

## Architecture
User Event → Backend → Logs → ML Service → Response

## Run Project
```bash
docker-compose up --build
