---
title: "OGIM: Oil and Gas Infrastructure Mapping Database vv2-4_RF06_RF08 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/60f47371/
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

# OGIM: Oil and Gas Infrastructure Mapping Database vv2-4_RF06_RF08 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

This dataset provides the locations of oil and gas (O&G) related
infrastructure within two key O&G producing regions in the United States:
the Delaware sub-basin of the Permian Basin in western Texas and southern
New Mexico, and the Uinta Basin in Utah.

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

* oil and gas wells,
* natural gas compressor stations,
* gathering and processing facilities,
* petroleum terminals,
* oil and gas pipelines,
* satellite detections of oil and gas flares,
* and "other" oil and gas related infrastructure, such as metering stations.

Records in the OGIM are consolidated from numerous publicly-available
governmental and academic sources, including:

* [Homeland Infrastructure Foundation-Level Data (HIFLD)](https://hifld-geoplatform.hub.arcgis.com/pages/hifld-open)
* [EPA Facility Level Information on Greenhouse Gases Tool (FLIGHT)](https://ghgdata.epa.gov/ghgp/main.do)
* [Texas Railroad Commission (RRC)](https://www.rrc.texas.gov/resource-center/research/data-sets-available-for-download/)
* [New Mexico Energy Minerals, and Natural Resources Department (EMNRD)](https://ocd-hub-nm-emnrd.hub.arcgis.com/datasets/dd971b8e25c54d1a8ab7c549244cf3cc_0/about)
* [Utah Geospatial Resource Center (UGRC)](https://gis.utah.gov/data/energy/oil-gas/)
* [Earth Observation Group (EOG) at the Colorado School of Mines](https://eogdata.mines.edu/products/vnf/global_gas_flare.html)
* [Marchese et al, 2015](https://doi.org/10.1021/acs.est.5b02275)

The O&G facilities in this dataset are spatially coincident with the extent
of MethaneAIR measurements taken on 8 August 2021 (research flight RF06)
over the Permian Basin and 11 August 2021 (research flight RF08) over the
Uinta Basin. MethaneAIR is an airborne precursor of the MethaneSAT satellite
mission, managed by MethaneSAT LLC. Only O&G facilities found within the RF06
or RF08 region of interest are included in this data release.

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

## 基本信息

- 数据集编号（Earth Engine ID）：`EDF/OGIM/OGIM_v2-4_RF06_RF08`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 时间范围：2023-11-14 至 2023-11-14
- 许可：CC-BY-4.0
- 关键词：edf, emissions, ghg, infrastructure-boundaries, methane, methaneair, methanesat, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| CATEGORY | STRING | Category of O&G infrastructure to which the facility belongs.  Values:  * GATHERING AND PROCESSING * NATURAL GAS COMPRESSOR STATION * NATURAL GAS FLARING DETECTIONS * OIL AND NATURAL GAS WELLS * OIL AND NATURAL GAS PIPELINES * PETROLEUM TERMINALS * STATIONS - OTHER  |
| FAC_ID | STRING | Unique ID used by the original source agency to identify the facility.  |
| FAC_NAME | STRING | Name of the facility. |
| FAC_TYPE | STRING | Detailed information on type of facility. |
| OGIM_ID | INT | Unique identifier for each facility in the geopackage. Values do not repeat across infrastructure categories.  |
| OGIM_STATUS | STRING | Standardized version of the facility status reported by the original data source. The original statuses were binned into one of 12 categories defined by EDF.  |
| OPERATOR | STRING | Name of the facility's operator, according to the original source at time of publication.  |
| SRC_DATE | STRING | Original publication date of the data source from which the record was acquired, in YYYY-MM-DD format.  |
| SRC_REF_ID | INT | ID number linking the record to its corresponding original data source. For more information, refer to the "Data_Catalog" table in the GeoPackage that accompanies [Omara et al (2023)](https://doi.org/10.5194/essd-15-3761-2023).  Values:  * 87, 91, 93, 94, 95, and 96 = HIFLD; * 89 = EPA FLIGHT; * 90 = Marchese et al (2015); * 142 = Earth Observation Group; * 197 and 217 = TX RRC; * 210 = NM EMNRD; * 218 = UGRC;  |
| STATE_PROV | STRING | State or province in which the facility resides.  Values:  * TEXAS * NEW_MEXICO * UTAH * N/A  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('EDF/OGIM/OGIM_v2-4_RF06_RF08');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/EDF_OGIM_OGIM_v2-4_RF06_RF08
- 数据引用：Omara, M., Gautam, R., O'Brien, M., Himmelberger, A., Franco, A.,
Meisenhelder, K., Hauser, G., Lyon, D., Chulakadaba, A., Miller, C. and
Franklin, J., 2023. Developing a spatially explicit global oil and gas
infrastructure database for characterizing methane emission sources at high
resolution. Earth System Science Data Discussions, 2023, pp.1-35.
[doi:10.5194/essd-15-3761-2023](https://doi.org/10.5194/essd-15-3761-2023),

- DOI：10.5194/essd-15-3761-2023

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
