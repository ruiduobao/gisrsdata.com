---
title: "WDOECM: Other Effective Area-based Conservation Measures (polygons)"
date: 2026-11-03 12:00:00
permalink: /pages/4295d2af/
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

# WDOECM: Other Effective Area-based Conservation Measures (polygons)

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

- 数据集编号（Earth Engine ID）：`WCMC/WDOECM/current/polygons`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：UN Environment World Conservation Monitoring Centre (UNEP-WCMC) / Protected Planet、Google Earth Engine
- 时间范围：2024-05-01 至 2030-01-01
- 许可：proprietary
- 关键词：boundaries, ecosystems, iucn, mpa, oceans, protected, table, wcmc, wdpa

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| CONS_OBJ | STRING | It refers to the primacy of conservation objectives. The field provides an indication of whether an OECM is managed with biodiversity conservation as a primary objective, secondary objective, or without conservation as an explicit objective.  |
| DESIG | STRING | Designation of the OECMs in the native language. |
| DESIG_ENG | STRING | Designation of the protected area or OECM in English. If the original language is English, this field will contain the same value as DESIG. No fixed values for national-level designations.  |
| DESIG_TYPE | STRING | Designation type, one of: national, regional, international, or not applicable  |
| GIS_AREA | DOUBLE | Protected area total extent, including both marine (if applicable) and terrestrial areas, in square kilometers calculated by UNEP-WCMC projecting the protected area polygon in the standard Mollweide projection and using GIS software tools.  |
| GIS_M_AREA | DOUBLE | Protected area marine extent in square kilometers calculated by UNEP-WCMC projecting the protected area polygon in the standard Mollweide projection and using GIS software tools.  |
| GOV_TYPE | STRING | Description of the decision-making structure of a PA. One of: federal or national ministry or agency, sub-national ministry or agency, government-delegated management, transboundary governance, collaborative governance, joint governance, individual landowners, non-profit organizations, for-profit organizations, indigenous peoples, local communities, or not reported.  |
| INT_CRIT | STRING | International criteria, assigned by UNEP-WCMC. For World Heritage and Ramsar sites only.  |
| ISO3 | STRING | ISO3 Code. [ISO 3166-3 character code](https://en.wikipedia.org/wiki/ISO_3166-3) of the country or territory where the OECM is located.  |
| IUCN_CAT | STRING | IUCN management category, one of: Ia (strict nature reserve), Ib (wilderness area), II (national park), III (natural monument or feature), IV (habitat/species management area), V (protected landscape/seascape), VI (PA with sustainable use of natural resources), not applicable, not assigned, or not reported.  |
| MANG_AUTH | STRING | Management authority. Agency, organization, individual or group that manages the OECM.  |
| MANG_PLAN | STRING | Link or reference to the PAs management plan. |
| MARINE | STRING | This field describes whether a PA falls totally or partially within the marine environment, one of: 0 (100% terrestrial PA), 1 (coastal: marine and terrestrial PA), or 2 (100% marine PA).  |
| METADATAID | INT | Metadata ID, assigned by UNEP-WCMC. Link to WDPA source table.  |
| NAME | STRING | Name of the OECM as provided by the data provider. |
| NO_TAKE | STRING | No take means that the taking of living or dead natural resources, inclusive of all methods of fishing, extraction, dumping, dredging and construction, is strictly prohibited in all or part of a marine PA. This is only applicable to PAs where the field marine = 1 or 2. One of: all, part, none, not reported, or not applicable (if MARINE field = 0).  |
| NO_TK_AREA | DOUBLE | Area of the marine no-take area in square kilometers. |
| ORIG_NAME | STRING | Name of the PA in the original language. |
| OWN_TYPE | STRING | Ownership type, one of: state, communal, individual landowners, for-profit organizations, non-profit organizations, joint ownership, multiple ownership, contested, or not Reported.  |
| PARENT_ISO | STRING | Parent ISO3 code. [ISO 3166-3 character code](https://en.wikipedia.org/wiki/ISO_3166-3) of country where the PA is located.  |
| PA_DEF | STRING | PA definition. Whether this site meets the IUCN and/or CBD definition of a PA: 1=yes, 0=no (currently stored outside WDPA).  |
| REP_AREA | DOUBLE | The total OECMs extent, including both marine (if applicable) and terrestrial areas, in square kilometers provided by data provider as specified in the legal text for the site.  |
| REP_M_AREA | DOUBLE | Marine area in square kilometers provided by the data provider.  |
| STATUS | STRING | Status of a PA, one of: proposed, inscribed, adopted, designated, or established.  |
| STATUS_YR | INT | Year of enactment of status in the STATUS field. |
| SUB_LOC | STRING | Sub-national location. [ISO 3166-2 sub-national code](https://en.wikipedia.org/wiki/ISO_3166-2) where the PA is located. If the PA is in more than one state, province, region etc., multiple ISO-3166-2 codes can be listed separated by a comma and space.  |
| SUPP_INFO | STRING | Supplementary information supporting the categorization of the site as an OECM.  |
| VERIF | STRING | Verification status, assigned by UNEP-WCMC. One of: state verified, expert verified, not reported (for unverified data that was already in the WDPA prior to the inclusion of the ''Verification'' field).  |
| WDPAID | DOUBLE | Unique identifier for a protected area (PA), assigned by UNEP-WCMC.  |
| WDPA_PID | STRING | Unique identifier for parcels or zones within a PA, assigned by UNEP-WCMC.  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('WCMC/WDOECM/current/polygons');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WCMC_WDOECM_current_polygons
- 数据引用：UNEP-WCMC and IUCN (year), Protected Planet: The World Database
on OECM Database [On-line], [insert month/year of the
version used], Cambridge, UK: UNEP-WCMC and IUCN Available at:
www.protectedplanet.net.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
