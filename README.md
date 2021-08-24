# Ticketing Application using Microservices
<strike>Deployed Application: [www.ticket-ly.xyz](http://www.ticket-ly.xyz/)</strike>

A concert ticket booking application using Docker containers for every feature of the application.

Each service is created using Node and Express. Data for each service is held in either a Mongo database or Redis. The entire app is deployed and runs in Docker containers executed in a Kubernetes cluster.

## Production Details
Kubernetes cluster hosted using [Digital Ocean](https://www.digitalocean.com/)

## Development Mode
Run ```skaffold dev``` to deploy the project on your system.

### Docker
Ensure [docker](https://docs.docker.com/get-docker/) is up and running in your system

### Minikube
[Install Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

Start the minikube cluster on docker by doing ```minikube start --driver=docker```

Ensure the cluster is running by doing ```minikube status```.

### Ingress
Ensure *ingress* is enabled in minikube cluster.

Run ```minikube addons enable ingress```

### Secret Keys
```kubectl create secret generic jwt-secret --from-literal JWT_KEY= <your key here> ```

```kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=<your key here>```
### Port Forwarding for NATS 
```kubectl port-forward <nats-depl-name> 4222:4222```

```kubectl port-forward <nats-depl-name> 8222:8222```

**Note:** There is a new *nats-depl-name* for each skaffold deployment





