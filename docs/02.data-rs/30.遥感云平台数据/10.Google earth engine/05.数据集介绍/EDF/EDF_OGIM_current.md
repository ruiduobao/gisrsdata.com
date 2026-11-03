---
title: "OGIM: Oil and Gas Infrastructure Mapping Database v2.5.1"
date: 2026-11-03 12:00:00
permalink: /pages/ef98f7b4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "edf"
  - "emissions"
  - "ghg"
  - "infrastructure-boundaries"
  - "methane"
  - "methaneair"
  - "methanesat"
  - "table"
---

# OGIM: Oil and Gas Infrastructure Mapping Database v2.5.1

## 数据集简介

This dataset provides the locations of oil and gas (O&G) related
infrastructure globally.

The Oil and Gas Infrastructure Mapping (OGIM) database is a project
developed by the Environmental Defense Fund (EDF) and [MethaneSAT LLC](https://www.methanesat.org/),
a wholly-owned subsidiary of EDF. The primary objective of developing
a standardized O&G infrastructure database such as OGIM is to support
MethaneSAT's emission quantification, source characterization, and other
scientific- or advocacy-relevant analyses of methane emissions from the oil
and gas sector. The OGIM database is developed based on the acquisition,
analysis, and quality assurance of publicly available geospatial data
sources of O&G facilities, which are combined within one standard data
schema and coordinate reference system.

This dataset contains the spatial locations of the following types of
infrastructure assets:

* oil and natural gas wells,
* oil and gas pipelines,
* natural gas compressor stations,
* gathering and processing facilities,
* tank batteries,
* offshore platforms,
* liquefied natural gas (LNG) facilities,
* crude oil refineries,
* petroleum terminals,
* injection and disposal facilities,
* equipment and component locations,
* satellite detections of oil and gas flares,
* and "other" oil and gas related infrastructure, such as metering stations


Records in the OGIM are consolidated from numerous publicly-available
governmental and academic sources. This list of sources is available [in the
OGIM_v2.5.1_Data_Source_References.pdf](https://zenodo.org/records/13259749)
document. For more information on each source, refer to the "Data_Catalog"
table that accompanies [Omara et al (2023)](https://doi.org/10.5194/essd-15-3761-2023).

Important notes about the attributes associated with these facility locations:

- Missing values (i.e., values missing or not reported by the original data
source) are handled by assigning "N/A" to string attributes, -999 to
numerical attributes, and a generic date of "1900-01-01" to date/datetime
attributes.

- Facility operator names have not been altered in any way from the original
source of data and are assumed to be accurate as of the original source's
publication date.

For more information about the OGIM database, including methods used in its
development and key applications of the database, please refer to the recent
publication by [Omara et al, 2023](https://doi.org/10.5194/essd-15-3761-2023).

Contact the data provider for more information about the project at this link:
[https://www.methanesat.org/contact/](https://www.methanesat.org/contact/)

This dataset will be updated in-place with the new versions.

## 基本信息

- 数据集编号（Earth Engine ID）：`EDF/OGIM/current`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 时间范围：2024-05-15 至 2024-05-15
- 许可：CC-BY-4.0
- 关键词：edf, emissions, ghg, infrastructure-boundaries, methane, methaneair, methanesat, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| CATEGORY | STRING | Category of O&G infrastructure to which the facility belongs.  Values:  * CRUDE OIL REFINERIES * EQUIPMENT AND COMPONENTS * INJECTION AND DISPOSAL * GATHERING AND PROCESSING * LNG FACILITIES * NATURAL GAS COMPRESSOR STATION * NATURAL GAS FLARING DETECTIONS * OFFSHORE PLATFORMS * OIL AND NATURAL GAS WELLS * OIL AND NATURAL GAS PIPELINES * PETROLEUM TERMINALS * STATIONS - OTHER * TANK BATTERIES  |
| OGIM_ID | INT | Unique identifier for each facility in the dataset. Values do not repeat across infrastructure categories.  |
| SRC_DATE | STRING | Original publication date of the data source from which the record was acquired, in YYYY-MM-DD format.  |
| SRC_REF_ID | INT | ID number(s) linking the record to its corresponding original data source(s). To look up the citation for a given SRC_REF_ID value, refer to the [Data Source Reference list](https://zenodo.org/records/13259749), or the "Data_Catalog" table in the GeoPackage that accompanies [Omara et al (2023)](https://doi.org/10.5194/essd-15-3761-2023).  |
| COUNTRY | STRING | Country in which the record resides. Where possible, country name matches the UN Member State list.  If features are located in more than one country, COUNTRY field contains a comma-separated list of these countries in alphabetical order.  |
| STATE_PROV | STRING | State or province in which the facility resides. |
| FAC_ID | STRING | Unique ID used by the original source agency to identify the facility.  |
| FAC_NAME | STRING | Name of the facility. |
| FAC_STATUS | STRING | Operational status of the infrastructure asset, according to the original source e.g. 'ACTIVE'; 'SUSPENDED'; 'TEMPORARILY CLOSED'.  FAC_STATUS of "N/A" cannot be assumed to mean active or inactive.  |
| FAC_TYPE | STRING | Detailed information on type of facility. |
| OGIM_STATUS | STRING | Standardized version of the facility status reported by the original data source. The original statuses were binned into one of 12 categories defined by EDF.  |
| OPERATOR | STRING | Name of the facility's operator, according to the original source at time of publication.  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('EDF/OGIM/current');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/EDF_OGIM_current
- 数据引用：Omara, M., Gautam, R., O'Brien, M., Himmelberger, A., Franco, A.,
Meisenhelder, K., Hauser, G., Lyon, D., Chulakadaba, A., Miller, C. and
Franklin, J., 2023. Developing a spatially explicit global oil and gas
infrastructure database for characterizing methane emission sources at high
resolution. Earth System Science Data Discussions, 2023, pp.1-35.
[doi:10.5194/essd-15-3761-2023](https://doi.org/10.5194/essd-15-3761-2023),

- DOI：10.5194/essd-15-3761-2023

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
