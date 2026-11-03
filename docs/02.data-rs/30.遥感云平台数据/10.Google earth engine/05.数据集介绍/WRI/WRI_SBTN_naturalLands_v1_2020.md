---
title: "SBTN Natural Lands Map v1"
date: 2026-11-03 12:00:00
permalink: /pages/d3ec8797/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ecosystems"
  - "landcover"
  - "landuse-landcover"
  - "wri"
---

# SBTN Natural Lands Map v1

## 数据集简介

The SBTN Natural Lands Map v1 is a 2020 baseline map of natural and
non-natural land covers intended for use by companies setting
[science-based targets for nature](https://sciencebasedtargetsnetwork.org/companies/take-action/),
specifically the SBTN Land target #1: no conversion of natural ecosystems.

"Natural" and "non-natural" definitions were adapted from the
[Accountability Framework initiative's definition of a natural
ecosystem](https://accountability-framework.org/use-the-accountability-framework/definitions/natural-ecosystem/)
as "one that substantially resembles - in terms of species composition,
structure, and ecological function - what would be found in a given area
in the absence of major human impacts" and can include managed ecosystems
as well as degraded ecosystems that are expected to regenerate either
naturally or through management (AFi 2024). The SBTN Natural Lands Map
operationalizes this definition by using proxies based on available data
that align with AFi guidance to the extent possible.

This map was made by compiling existing global
and regional data.You can find the full technical note explaining the
methodology linked on the
[Natural Lands GitHub](https://github.com/wri/natural-lands-map).
This work was a collaboration between Land & Carbon Lab at the World
Resources Institute, World Wildlife Fund US, Systemiq, and SBTN.

## 基本信息

- 数据集编号（Earth Engine ID）：`WRI/SBTN/naturalLands/v1/2020`
- 数据类型：影像（Image）
- 提供方：WRI、Google Earth Engine
- 时间范围：2020-01-01 至 2020-12-31
- 空间分辨率：30 米
- 许可：CC-BY-NC-SA-4.0
- 关键词：ecosystems, landcover, landuse-landcover, wri

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | Land cover classification. | 30 |  |
| natural | Land cover classification. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('WRI/SBTN/naturalLands/v1/2020');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WRI_SBTN_naturalLands_v1_2020
- 数据引用：Mazur, E., M. Sims, E. Goldman, M. Schneider, M.D. Pirri, C.R. Beatty, F.
Stolle, Stevenson, M. 2024. "SBTN Natural Lands Map v1: Technical
Documentation". Science Based Targets for Land Version 1 - Supplementary
Material. Science Based Targets Network.
[https://sciencebasedtargetsnetwork.org/wp-content/uploads/2024/09/Technical-Guidance-2024-Step3-Land-v1-Natural-Lands-Map.pdf](https://sciencebasedtargetsnetwork.org/wp-content/uploads/2024/09/Technical-Guidance-2024-Step3-Land-v1-Natural-Lands-Map.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
