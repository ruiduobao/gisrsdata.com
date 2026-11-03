---
title: "WDKBA: World Database of Key Biodiversity Areas (KBAs) - March 2026"
date: 2026-11-03 12:00:00
permalink: /pages/363cff9d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biodiversity"
  - "boundaries"
  - "ecosystems"
  - "global"
  - "iucn"
  - "management"
  - "oceans"
  - "table"
---

# WDKBA: World Database of Key Biodiversity Areas (KBAs) - March 2026

## 数据集简介

**If you are interested in accessing the KBA dataset please complete the
[KBA data request form](https://www.keybiodiversityareas.org/request-gis-data)
which will allow access directly in GEE once approved.**

Key Biodiversity Areas (KBAs) are 'sites contributing
significantly to the global persistence of biodiversity’,
in terrestrial, freshwater and marine ecosystems. Sites
can be identified as KBAs if they meet at least one of
the KBA criteria set out in the KBA Standard (IUCN, 2016) for threatened or geographically
restricted species or ecosystems, ecological integrity, biological processes, or
irreplaceability. Both tabular and spatial data for KBAs are
managed in the World Database of Key Biodiversity Areas (WDKBA).

The identification of KBAs draws upon the efforts of huge networks
of local experts and relies on locally collected data. The process
to reassess existing or identify new KBAs, is highly inclusive,
consultative and nationally driven. Anyone with appropriate data may
propose a site as a KBA, although consultation with relevant stakeholders
at the local and national level is required when identifying the site and
needs to be documented in the proposal. KBAs can be identified by a KBA
National Coordination Group (KBA NCG) if this has been established in a
country or by an individual or small group of proposers. Further information
about KBAs can be found on the [KBA website](https://www.keybiodiversityareas.org/).

**Data Sources.** Sites of importance for biodiversity that had been identified using other
pre-existing criteria formed the basis of the KBA dataset prior to the
launch of the KBA Standard in 2016. These were principally the Important
Bird and Biodiversity Areas (IBAs) identified by BirdLife International,
plus Alliance for Zero Extinction (AZE) sites and KBAs covering multiple
taxonomic groups in freshwater, marine and terrestrial systems under previously
published criteria. Since 2016, many of these sites have been reassessed
against the Global Standard.
Currently, the global KBA network consists of >16,500 sites and these are classified
as Global (those meeting Global KBA criteria), Regional (those not meeting Global KBA
criteria but continuing	to meet other pre-existing criteria) or Global/ Regional to
be determined (those legacy sites with insufficient information to demonstrate whether
they meet Global KBA criteria). Further details about the current KBA dataset are published
on the KBA website.

**Asset Naming Conventions.** An updated version of the WDKBA is currently
released every six months. The most recent version is permanently available
as projects/ee-kbas-in-gee/assets/current. Previous versions, starting from
March 2025, are available in the format projects/ee-kbas-in-gee/assets/YYYYMM.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/ee-kbas-in-gee/assets/current`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：KBA Partnership、BirdLife International、Google Earth Engine
- 时间范围：2016-01-01 至 2026-03-01
- 许可：proprietary
- 关键词：biodiversity, boundaries, ecosystems, global, iucn, management, oceans, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| AzeStatus | STRING | Whether or not the KBA is an Alliance for Zero Extinction (AZE) site (confirmed or ""). |
| Country | STRING | Name of country/territory containing the KBA. |
| IbaStatus | STRING | The Important Bird and Biodiversity Area (IBA) status of the KBA, taking one of the following values: candidate, confirmed, de-listed, does not qualify, superseded or "".  |
| IntName | STRING | Name of KBA to be used internationally, typically in English. |
| ISO3 | STRING | ISO3 code of country/territory containing the KBA. |
| KbaClass | STRING | The classification of KBAs as one of the following:  * Global — KBAs that meet KBA criteria. * Regional - KBAs identified prior to the KBA Standard that meet other pre-existing criteria. * Global/Regional TBD - KBAs identified prior to the KBA Standard using pre-existing criteria but with insufficient evidence to show whether they continue to meet criteria. Sites in this group are prioritised for reassessment.  |
| KbaStatus | STRING | Current state of the KBA's assessment, this field equals confirmed for all published sites |
| LastUpdate | STRING | Year in which the underlying KBA data was last updated. |
| LegacyKba | STRING | Whether the KBA was identified using KBA criteria from before the publication of the [KBA standard](https://www.keybiodiversityareas.org/working-with-kbas/proposing-updating/criteria).  |
| NatName | STRING | Name of KBA used nationally, typically in the language of its country. |
| Region | STRING | Name of region containing the KBA. |
| SitAreaKM2 | DOUBLE | Calculated site area in KM2. |
| SitLat | DOUBLE | Latitude coordinate of centroid. |
| SitLong | DOUBLE | Longitude coordinate of centroid. |
| SitRecID | DOUBLE | Unique identifier for a KBA. |
| Source | STRING | Origin of the spatial data. |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('projects/ee-kbas-in-gee/assets/current');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_ee-kbas-in-gee_assets_current
- 数据引用：BirdLife International (year). Digital boundaries of Key Biodiversity
Areas from the World Database of Key Biodiversity Areas. Developed by
the KBA Partnership: BirdLife International, International Union for
the Conservation of Nature, American Bird Conservancy, Amphibian Survival
Alliance, Conservation International, Critical Ecosystem Partnership Fund,
Global Environment Facility, Re:Wild, NatureServe, Rainforest Trust, Royal
Society for the Protection of Birds, Wildlife Conservation Society and World
Wildlife Fund. [insert month/year of version used].  Available at http://www.keybiodiversityareas.org/kba-data/request.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
