---
title: "Designation: USGS GAP PAD-US v2.0"
date: 2026-11-03 12:00:00
permalink: /pages/3a617def/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "conservation-easements"
  - "designation"
  - "infrastructure-boundaries"
  - "management"
  - "ownership"
  - "protected-areas"
  - "public-lands"
  - "table"
  - "usgs"
---

# Designation: USGS GAP PAD-US v2.0

## 数据集简介

PAD-US is America's official national inventory of U.S. terrestrial and
marine protected areas that are dedicated to the preservation of biological
diversity and to other natural, recreation and cultural uses, managed for these
purposes through legal or other effective means.  This database is separated
into 4 separate table assets: designation, easement, fee, and proclamation.

The 'Designation' asset includes areas expected to overlap fee-owned lands,
including designations such as 'Wilderness Area', leases, agreements, and areas
where the protection mechanism (Category) is 'Unknown'.

The PAD-US database strives to be a complete inventory of areas dedicated to
the preservation of biological diversity, and other natural (including
extraction), recreational or cultural uses, managed for these purposes through
legal or other effective means.  PAD-US is an aggregation of \"best available\"
spatial data provided by agencies and organizations at a point in time.  This
includes both fee ownership of lands as well as management through leases,
easements, or other binding agreements.  The data also tracks Congressional
designations, Executive designations, and administrative designations
identified in management plans (e.g. Bureau of Land Management's 'Area of
Environmental Concern').  These factors provide for a robust dataset offering a
spatial representation of the complex U.S. protected areas network.  It is
important to have in mind a specific analysis question when approaching how to
work with the data.  As a full inventory of areas aggregated from authoritative
source data, PAD-US includes overlapping designation types and small boundary
discrepancies between agency datasets.  Overlapping designations largely occur
in the Federal estate of the 'Designation' or 'Combined' feature classes (e.g.
'Wilderness Area' over a 'Wild and Scenic River' and 'National Forest').

It is important to note the presence of overlaps, especially when trying to
calculate area statistics; overlapping boundaries count the same area of ground
multiple times.  While minor boundary discrepancies remain, most major overlaps
have been removed from the 'Fee' asset and this is the best source for
overall land area calculations by land manager ('Manager Name') within the
PAD-US database (data gaps limit calculations by fee ownership or 'Owner
Name').  Statistics summarizing 'Public Access' or Protection Status ('GAP
Status Code') by managing agency or organization from an analysis of the PAD-US
1.4 'Combined' feature class are [available](https://www.usgs.gov/core-science-systems/science-analytics-and-synthesis/gap/science/pad-us-statistics-and-reports)
and will be updated with PAD-US 2.0.  As the PAD-US database is a direct
aggregation of source data, the PAD-US development team does not alter spatial
linework.  The exception is to \"clip\" lands data along State boundary lines
(using the authoritative State boundary file provided by the U.S. Census
Bureau) and remove the small segments of boundaries created by this process
associated with State or local lands (not Federal or nonprofit lands).  Some
boundary discrepancies (or slivers) remain in the dataset.  Data overlaps have
been identified and are shared, along with the U.S. Census Bureau State
jurisdictional boundary file, with agency data stewards to facilitate edits in
source files that will then be incorporated in subsequent PAD-US versions over
time. The PAD-US database is built in collaboration with many partners and
data stewards.
[Information regarding data stewards is available](https://www.usgs.gov/core-science-systems/science-analytics-and-synthesis/gap/science/pad-us-data-stewards).

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/GAP/PAD-US/v20/designation`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：US Geological Survey、Google Earth Engine
- 时间范围：2018-09-01 至 2018-09-01
- 许可：proprietary
- 关键词：conservation-easements, designation, infrastructure-boundaries, management, ownership, protected-areas, public-lands, table, usgs

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| Agg_Src | STRING | Source of data aggregator. |
| Category | STRING | The type of protection: designation, easement, fee, marine, other, proclamation, or unknown. |
| Comments | STRING | Additional comments. |
| Date_Est | STRING | Year protected area established. |
| Des_Tp | STRING | The detailed type of designation, e.g. 'area of critical environmental concern', 'local park', 'national park', 'wilderness area', etc.  |
| EsmtHldr | STRING | The organization that holds the easement. |
| EHoldTyp | STRING | The type of easement holder. |
| FeatClass | DOUBLE | Unique id. |
| GAP_Sts | STRING | The level of protection or "status":  * 1: managed for biodiversity, disturbance events proceed or are mimicked * 2: managed for biodiversity, disturbance events suppressed * 3: managed for multiple uses, subject to extractive (e.g. mining or logging) or OHV use * 4: no known mandate for biodiversity protection.  |
| GAPCdDt | STRING | Date the status code was determined. |
| GAPCdSrc | STRING | Source of the status code. |
| GIS_Acres | DOUBLE | Number of acres of the protected area calculated. |
| GIS_Src | STRING | The source of the GIS data. |
| Src_Date | STRING | The date the GIS data represent. |
| IUCN_Cat | STRING | The level of protection using IUCN protection status:  * Ia: Strict nature reserves * Ib: Wilderness areas * II: National park * III: Natural monument or feature * IV: Habitat/species management; Other Conservation Area; Unassigned * V: Protected landscape / seascape * VI: Protected area with sustainable use of natural resources  |
| IUCNCtDt | STRING | Date of the IUCN category. |
| IUCNCtSrc | STRING | Source of the IUCN protected status. |
| Loc_Ds | STRING | Designation of the protected area at the local level. |
| Loc_Mang | STRING | The manager of the protected area. |
| Loc_Nm | STRING | The name of the protected area. |
| Loc_Own | STRING | The owner of the protected area. |
| Mang_Name | STRING | The name of the managing organization. |
| Mang_Type | STRING | The manager type. |
| Own_Name | STRING | The name of the owner of the protected area. |
| Own_Type | STRING | The type of owner organization. |
| Access | STRING | Accessibility to the protected area. |
| Access_Dt | STRING | The date of the access. |
| Access_Src | STRING | The source of the access data. |
| ID | STRING | The id of the protected area. |
| State_Nm | STRING | State names in two letter abbreviations |
| Unit_Nm | STRING | Units name |
| WDPA_Cd | STRING | The site code associated with the WDPA dataset. |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('USGS/GAP/PAD-US/v20/designation');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_GAP_PAD-US_v20_designation
- 数据引用：U.S. Geological Survey (USGS) Gap Analysis Project (GAP), 2018,
Protected Areas Database of the United States (PAD-US): U.S.
Geological Survey data release, [doi:10.5066/P955KPLE](https://doi.org/10.5066/P955KPLE).

- DOI：10.5066/P955KPLE

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
