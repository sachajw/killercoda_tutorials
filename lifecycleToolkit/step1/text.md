# Install the required observability features

The Keptn Lifecycle Toolkit emits OpenTelemetry data as standard but the toolkit does not come pre-bundled with Observability backend tooling. This is deliberate as it provides flexibility for you to bring your own Observability backend that consumes this emitted data.

In order to use the observability features of the lifecycle toolkit, we need a monitoring and tracing backend.

In this guide, we use:

- Prometheus for Metrics
- Jaeger for Traces

# Install these with the following commands:

To get all the required details before making the deployement we need to get different observability data, running this command might take a little while to complete processing. The following command does the following steps:

- Create Namespace and install CertManager
- Create Namespace and install Jaeger
- Install OpenTelemetry Collector
- Install Prometheus Mockserver

```
cd ~/lifecycle-toolkit-examples
make install-observability
make restart-lifecycle-toolkit
```{{exec}}