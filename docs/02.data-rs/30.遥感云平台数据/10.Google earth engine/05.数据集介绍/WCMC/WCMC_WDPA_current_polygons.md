---
title: "WDPA: World Database on Protected Areas (polygons)"
date: 2026-11-03 12:00:00
permalink: /pages/6f1d2617/
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

# WDPA: World Database on Protected Areas (polygons)

## 数据集简介

The World Database on Protected Areas (WDPA) is the
most up-to-date and complete source of information on protected
areas, updated monthly with submissions from governments, non-governmental
organizations, landowners, and communities. It is managed by
the United Nations Environment Programme's World Conservation
Monitoring Centre (UNEP-WCMC) with support from IUCN and its
World Commission on Protected Areas (WCPA).

**WDPA User Manual.** For details including methodologies,standards, data
providers, metadata field definitions and descriptions, refer
to the [WDPA User Manual](https://pp-import-production.s3.amazonaws.com/WDPA_Manual_1_5.pdf).

The WDPA has two feature classes with associated spatial
and tabular data on more than 200k protected areas. About 91%
contain polygon boundaries, with the remaining only as points,
representing the center of the protected area as much as possible.

**Asset Naming Conventions.** WCMC updates the WDPA on a
monthly basis. The most recent version is always available as
WCMC/WDPA/current/polygons and WCMC/WDPA/current/points. Historical
versions, starting with July 2017, are available in the format
WCMC/WDPA/YYYYMM/polygons and WCMC/WDPA/YYYYMM/points.

Please see the [WDPA User Manual](https://pp-import-production.s3.amazonaws.com/WDPA_Manual_1_5.pdf)
for additional details on the field list.

## 基本信息

- 数据集编号（Earth Engine ID）：`WCMC/WDPA/current/polygons`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：UN Environment World Conservation Monitoring Centre (UNEP-WCMC) / Protected Planet、Google Earth Engine
- 时间范围：2017-07-01 至 2030-01-01
- 许可：proprietary
- 关键词：boundaries, ecosystems, iucn, mpa, oceans, protected, table, wcmc, wdpa

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| WDPAID | DOUBLE | Unique identifier for a protected area (PA), assigned by UNEP-WCMC. |
| WDPA_PID | STRING | Unique identifier for parcels or zones within a PA, assigned by UNEP-WCMC. |
| PA_DEF | STRING | PA definition. Whether this site meets the IUCN and/or CBD definition of a PA: 1=yes, 0=no (currently stored outside WDPA).  |
| NAME | STRING | Name of the PA as provided by the data provider. |
| ORIG_NAME | STRING | Name of the PA in the original language. |
| DESIG | STRING | Designation of the PA in the native language. |
| DESIG_ENG | STRING | Designation of the PA in English. Allowed values for international-level designations: Ramsar Site, Wetland of International Importance; UNESCO-MAB Biosphere Reserve; or World Heritage Site. Allowed values for regional-level designations: Baltic Sea Protected Area (HELCOM), Specially Protected Area (Cartagena Convention), Marine Protected Area (CCAMLR), Marine Protected Area (OSPAR), Site of Community Importance (Habitats Directive), Special Protection Area (Birds Directive), or Specially Protected Areas of Mediterranean Importance (Barcelona Convention). No fixed values for PAs designated at a national level.  |
| DESIG_TYPE | STRING | Designation type, one of: national, regional, international, or not applicable |
| IUCN_CAT | STRING | IUCN management category, one of: Ia (strict nature reserve), Ib (wilderness area), II (national park), III (natural monument or feature), IV (habitat/species management area), V (protected landscape/seascape), VI (PA with sustainable use of natural resources), not applicable, not assigned, or not reported.  |
| INT_CRIT | STRING | International criteria, assigned by UNEP-WCMC. For World Heritage and Ramsar sites only. |
| MARINE | STRING | This field describes whether a PA falls totally or partially within the marine environment, one of: 0 (100% terrestrial PA), 1 (coastal: marine and terrestrial PA), or 2 (100% marine PA).  |
| REP_M_AREA | DOUBLE | Marine area in square kilometers provided by the data provider. |
| REP_AREA | DOUBLE | The total PA extent, including both marine (if applicable) and terrestrial areas, in square kilometers provided by data provider as specified in the legal text for the site.  |
| NO_TAKE | STRING | No take means that the taking of living or dead natural resources, inclusive of all methods of fishing, extraction, dumping, dredging and construction, is strictly prohibited in all or part of a marine PA. This is only applicable to PAs where the field marine = 1 or 2. One of: all, part, none, not reported, or not applicable (if MARINE field = 0).  |
| NO_TK_AREA | DOUBLE | Area of the marine no-take area in square kilometers. |
| STATUS | STRING | Status of a PA, one of: proposed, inscribed, adopted, designated, or established. |
| STATUS_YR | INT | Year of enactment of status in the STATUS field. |
| GOV_TYPE | STRING | Description of the decision-making structure of a PA. One of: federal or national ministry or agency, sub-national ministry or agency, government-delegated management, transboundary governance, collaborative governance, joint governance, individual landowners, non-profit organizations, for-profit organizations, indigenous peoples, local communities, or not reported.  |
| OWN_TYPE | STRING | Ownership type, one of: state, communal, individual landowners, for-profit organizations, non-profit organizations, joint ownership, multiple ownership, contested, or not Reported.  |
| MANG_AUTH | STRING | Management authority. Agency, organization, individual or group that manages the PA. |
| MANG_PLAN | STRING | Link or reference to the PAs management plan. |
| VERIF | STRING | Verification status, assigned by UNEP-WCMC. One of: state verified, expert verified, not reported (for unverified data that was already in the WDPA prior to the inclusion of the ''Verification'' field).  |
| METADATAID | INT | Metadata ID, assigned by UNEP-WCMC. Link to WDPA source table. |
| SUB_LOC | STRING | Sub-national location. [ISO 3166-2 sub-national code](https://en.wikipedia.org/wiki/ISO_3166-2) where the PA is located. If the PA is in more than one state, province, region etc., multiple ISO-3166-2 codes can be listed separated by a comma and space.  |
| PARENT_ISO | STRING | Parent ISO3 code. [ISO 3166-3 character code](https://en.wikipedia.org/wiki/ISO_3166-3) of country where the PA is located.  |
| ISO3 | STRING | ISO3 Code. [ISO 3166-3 character code](https://en.wikipedia.org/wiki/ISO_3166-3) of the country or territory where the PA is located.  |
| GIS_AREA | DOUBLE | Protected area total extent, including both marine (if applicable) and terrestrial areas, in square kilometers calculated by UNEP-WCMC projecting the protected area polygon in the standard Mollweide projection and using GIS software tools.  |
| GIS_M_AREA | DOUBLE | Protected area marine extent in square kilometers calculated by UNEP-WCMC projecting the protected area polygon in the standard Mollweide projection and using GIS software tools.  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('WCMC/WDPA/current/polygons');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WCMC_WDPA_current_polygons
- 数据引用：UNEP-WCMC and IUCN (year), Protected Planet: The World Database
on Protected Areas (WDPA) [On-line], [insert month/year of the
version used], Cambridge, UK: UNEP-WCMC and IUCN Available at:
www.protectedplanet.net.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
