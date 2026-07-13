# Lógica de Control

Esta carpeta reúne toda la documentación y los archivos relacionados con el desarrollo de la **lógica de control** del proyecto integrador. En ella se describe el proceso seguido para diseñar, documentar e implementar la estrategia de control de la línea automatizada de empaque.

Para el desarrollo del sistema de control se empleó una metodología basada en la conversión de **GRAFCET** a **Ladder**, permitiendo transformar la secuencia funcional del proceso en un programa ejecutable para PLC. Este enfoque facilita la validación del comportamiento del sistema, mejora la organización de la lógica de control y simplifica las tareas de mantenimiento y depuración.

---

## Contenido de la carpeta

| Archivo / Carpeta              | Descripción                                                                                                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  **Filosofía de Control.md** | Describe los principios de operación del sistema, los objetivos de control, los criterios de funcionamiento y las estrategias implementadas para la automatización del proceso. |
|  **Narrativa de Control.md** | Presenta la secuencia detallada de operación del sistema, describiendo el comportamiento esperado de cada estación, sensor y actuador durante el ciclo de producción.           |
|  **Proyecto_APM.ACD**        | Proyecto desarrollado en **Studio 5000 Logix Designer**, que contiene la implementación completa de la lógica de control del sistema.                                           |
|  **Grafcet**                 | Diagramas GRAFCET correspondientes a las diferentes etapas del proceso, utilizados como base para el diseño de la lógica de control.                                            |
|  **Reporte Studio 5000.pdf**                  | Conjunto de Variable Tag y diagramas Ladder implementados a partir de los GRAFCET, representando la lógica programada en el PLC para controlar el sistema automatizado.                                     |

---

## Metodología de desarrollo

La estrategia de programación siguió las siguientes etapas:

1. Definición de la **filosofía de control** del proceso.
2. Elaboración de la **narrativa de control**, describiendo la secuencia de operación.
3. Diseño de los diagramas **GRAFCET** para representar el comportamiento secuencial del sistema.
4. Conversión de los diagramas GRAFCET a **Ladder**, implementando la lógica de control en el PLC.
5. Programación y validación del sistema en **Studio 5000 Logix Designer**.

Este flujo de trabajo proporciona una estructura organizada para el desarrollo del sistema de control, facilitando la trazabilidad entre los requerimientos funcionales, el diseño secuencial y la implementación final en el controlador lógico programable.
