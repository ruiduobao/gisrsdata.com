---
title: "WDOECM: Other Effective Area-based Conservation Measures (points)"
date: 2026-11-03 12:00:00
permalink: /pages/b2f88eed/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "boundaries"
  - "ecosystems"
  - "iucn"
  - "mpa"
  - "oceans"
  - "protected"
  - "table"
  - "wcmc"
  - "wdpa"
---

# WDOECM: Other Effective Area-based Conservation Measures (points)

## 数据集简介

A geographically defined area other than a Protected Area, which is governed
and managed in ways that achieve positive and sustained long-term outcomes
for the in situ conservation of biodiversity, with associated ecosystem
functions and services and where applicable, cultural, spiritual,
socio-economic, and other locally relevant values.

The WDOECM has two feature classes with associated spatial
and tabular data.
The World Database on Other Effective Area-based Conservation Measures
(WDOECM) is a global repository of information on Other Effective
Area-based Conservation Measures (OECMs). It is managed by the United
Nations Environment Programme's World Conservation Monitoring Centre
(UNEP-WCMC) with support from the Convention on Biological Diversity
(CBD).

**WDOECM User Manual.** For details including methodologies,standards, data
providers, metadata field definitions and descriptions, refer
to the [WDOECM User Manual](https://wdpa.s3-eu-west-1.amazonaws.com/WDPA_Manual/English/WDPA_WDOECM_Manual_1_6.pdf).

**Asset Naming Conventions.** WCMC updates the WDOECM on a
monthly basis. The most recent version is always available as
WCMC/WDOECM/current/polygons and WCMC/WDOECM/current/points. Historical
versions, starting with May 2024, are available in the format
WCMC/WDOECM/YYYYMM/polygons and WCMC/WDOECM/YYYYMM/points.

Please see the [WDOECM User Manual](https://wdpa.s3-eu-west-1.amazonaws.com/WDPA_Manual/English/WDPA_WDOECM_Manual_1_6.pdf)
for additional details on the field list.

## 基本信息

- 数据集编号（Earth Engine ID）：`WCMC/WDOECM/current/points`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：UN Environment World Conservation Monitoring Centre (UNEP-WCMC) / Protected Planet、Google Earth Engine
- 时间范围：2024-05-01 至 2030-01-01
- 许可：proprietary
- 关键词：boundaries, ecosystems, iucn, mpa, oceans, protected, table, wcmc, wdpa

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| CONS_OBJ | STRING | Designation type, categorized as National, Regional, International, or Not Applicable.  |
| DESIG | STRING | Designation of the protected area or OECM in the native language, provided by the data provider.  |
| DESIG_ENG | STRING | Designation of the protected area or OECM in English. If the original language is English, this field will contain the same value as DESIG. No fixed values for national-level designations.  |
| DESIG_TYPE | STRING | Designation type, categorized as National, Regional, International, or Not Applicable.  |
| GOV_TYPE | STRING | Governance type under which the protected area or OECM operates, such as Federal or National Ministry or Agency, Sub-national Ministry or Agency, Collaborative governance, etc.  |
| INT_CRIT | STRING | International criteria used for World Heritage Sites and Ramsar sites, assigned by UNEP-WCMC.  |
| ISO3 | STRING | ISO3 Code. [ISO 3166-3 character code](https://en.wikipedia.org/wiki/ISO_3166-3) of the country or territory where the protected area or OECM is located.  |
| IUCN_CAT | STRING | IUCN management category classifies protected areas according to their management objectives. Categories include Ia (Strict Nature Reserve), II (National Park), VI (Protected Area with sustainable use of natural resources), etc.  |
| MANG_AUTH | STRING | Management authority responsible for managing the protected area or OECM.  |
| MANG_PLAN | STRING | Indicates whether a management plan exists for the protected area or OECM.  |
| MARINE | STRING | Indicates whether the area is terrestrial or marine. Values: 0 for terrestrial, 1 for coastal, and 2 for marine. Essential for understanding the nature of the protected area.  |
| METADATAID | INT | Unique identifier for the metadata record associated with the protected area or OECM.  |
| NAME | STRING | Legal name or other name assigned to the protected area or OECM in Latin characters.  |
| NO_TAKE | STRING | No-take areas within the protected area or OECM where extractive activities are prohibited. Values include All, Part, None, Not Reported, and Not Applicable.  |
| NO_TK_AREA | DOUBLE | Area of the no-take zone within the protected area or OECM, measured in square kilometers.  |
| ORIG_NAME | STRING | Original name of the protected area or OECM in its original language or characters.  |
| OWN_TYPE | STRING | Ownership type of the land and/or waters within the protected area or OECM. Accepted values include State, Communal, Individual landowners, For-profit organizations, etc.  |
| PARENT_ISO | STRING | Parent ISO3 code. [ISO 3166-3 character code](https://en.wikipedia.org/wiki/ISO_3166-3) of the parent country if the protected area or OECM spans multiple countries.  |
| PA_DEF | STRING | Indicates whether the area meets the IUCN definition of a protected area. Values: 1 for yes, 0 for no (stored outside WDPA).  |
| REP_AREA | DOUBLE | The total reported area of the protected area or OECM in square kilometers, including both marine (if applicable) and terrestrial areas, as specified in the legal text.  |
| REP_M_AREA | DOUBLE | Reported marine area in square kilometers within the protected area or OECM.  |
| STATUS | STRING | Current status of the protected area or OECM, such as Proposed, Designated, or Established.  |
| STATUS_YR | INT | Year when the current status of the protected area or OECM was enacted.  |
| SUB_LOC | STRING | Sub-national location or administrative region where the protected area or OECM is situated. If the PA is in more than one region, multiple ISO-3166-2 codes can be listed.  |
| SUPP_INFO | STRING | Supplementary information supporting the categorization of the site as an OECM.  |
| VERIF | STRING | Verification status of the data, indicating whether it has been verified by state authorities or other recognized entities. Values: State Verified, Expert Verified, or Not Reported.  |
| WDPAID | DOUBLE | Unique identifier for a protected area (PA), assigned by UNEP-WCMC.  |
| WDPA_PID | STRING | Unique identifier for parcels or zones within a PA, assigned by UNEP-WCMC.  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('WCMC/WDOECM/current/points');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WCMC_WDOECM_current_points
- 数据引用：UNEP-WCMC and IUCN (year), Protected Planet: The World Database
on OECM Database [On-line], [insert month/year of the
version used], Cambridge, UK: UNEP-WCMC and IUCN Available at:
www.protectedplanet.net.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
