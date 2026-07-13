# Manufacturing Execution System (MES)

Esta carpeta contiene el desarrollo del **Manufacturing Execution System (MES)** del proyecto integrador, una aplicación web diseñada para supervisar y gestionar en tiempo real la información proveniente del sistema de manufactura.

El MES fue desarrollado utilizando **React.js** para el frontend y **Node.js** para el backend. La aplicación se conecta a una base de datos **SQL Server** alojada en **Microsoft Azure**, permitiendo centralizar la información del proceso y visualizar indicadores clave de desempeño (KPIs) desde una única plataforma.

---

## Acceso al Dashboard del MES

**https://blue-coast-0ae297c10.7.azurestaticapps.net/**

---

## Acceso al Repositorio de MES

**https://github.com/Miguel-Parrado/AzureAPM**

---

## Arquitectura del sistema

El MES forma parte de la arquitectura digital del proyecto y actúa como plataforma de supervisión y análisis de la producción.

El flujo general de información es el siguiente:

1. **Ignition** monitorea el estado de la línea de producción.
2. Ignition actualiza en la base de datos SQL alojada en **Microsoft Azure** la información de la maquinaria, incluyendo:

   * Estado de las estaciones.
   * Eficiencia de producción.
   * Botellas producidas.
   * Meta de producción.
3. El **MES** consulta continuamente la base de datos para obtener la información más reciente.
4. A partir de estos datos, el sistema calcula y actualiza automáticamente indicadores como el **Overall Equipment Effectiveness (OEE)**.
5. Adicionalmente, **Ignition** puede actualizar el indicador de **Calidad**, el cual se almacena directamente en la base de datos y es reflejado en tiempo real dentro del dashboard del MES.

---

## Funcionalidades principales

El sistema MES permite:

* Supervisar el estado de la línea de producción.
* Visualizar indicadores de producción en tiempo real.
* Monitorear el cumplimiento de las metas de producción.
* Calcular automáticamente el indicador **OEE**.
* Mostrar el indicador de **Calidad** actualizado desde Ignition.
* Centralizar la información proveniente de la planta mediante una arquitectura basada en Microsoft Azure.

---

## Contenido de la carpeta

| Archivo / Carpeta  | Descripción                                                                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Azure Files** | Contiene los archivos, recursos y componentes utilizados para el desarrollo e implementación del Manufacturing Execution System sobre la plataforma Microsoft Azure. |

---

## Integración con el proyecto

El MES constituye la capa de gestión del proyecto de **Industria 4.0**, integrando la información generada por los sistemas de automatización y supervisión para ofrecer una visión consolidada del estado de la producción.

Su integración con **Ignition**, **Microsoft Azure**, la base de datos SQL y el resto de los componentes del proyecto permite disponer de información confiable y actualizada para apoyar la toma de decisiones, el seguimiento de la producción y la evaluación del desempeño del sistema mediante indicadores clave como el **OEE**.
