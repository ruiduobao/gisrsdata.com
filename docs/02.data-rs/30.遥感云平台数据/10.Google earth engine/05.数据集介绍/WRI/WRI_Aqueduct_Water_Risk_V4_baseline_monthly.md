---
title: "WRI Aqueduct Baseline Monthly Version 4.0"
date: 2026-11-03 12:00:00
permalink: /pages/5bb9bca6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqueduct"
  - "flood"
  - "monitoring"
  - "surface-ground-water"
  - "table"
  - "wri"
---

# WRI Aqueduct Baseline Monthly Version 4.0

## 数据集简介

Aqueduct 4.0 is the latest iteration of WRI's water risk framework designed
to translate complex hydrological data into intuitive indicators of water
related risk. This dataset has curated 13 water risk indicators for
quantity, quality and reputational concerns into a comprehensive framework.
For 5 of the 13 indicators, a global hydrological model called PCR-GLOBWB 2
has been used to generate novel datasets on sub-basic water supply.
The PCR-GLOBWB 2 model is also used to project future sub-basin water
conditions using CMIP6 climate forcings. The projections center around
three periods (2030, 2050, and 2080) under three future scenarios
(business-as-usual SSP 3 RCP 7.0, optimistic SSP 1 RCP 2.6, and
pessimistic SSP 5 RCP 8.5).

The water risk indicators have been aggregated by category (quantity,
quality, reputational, and overall) into composite risk scores using
sector-specific weighting schemes. In addition, select sub-basin scores have
been aggregated into country and provincial administrative boundaries using
a weighted average approach, where sub-basins with more demand have a higher
influence over the final administrative score.

The WRI Aqueduct baseline monthly dataset provides monthly data on key water
risk indicators which includes indicators such as baseline water stress,
baseline water depletion and interannual variability.This monthly data
allows for a more detailed analysis of water risk dynamics throughout the
year, which is crucial for understanding seasonal water scarcity, planning
for water management interventions, and adapting to changing water
availability patterns.

This [technical note](https://www.wri.org/research/aqueduct-40-updated-decision-relevant-global-water-risk-indicators)
explains in detail the framework, methodology, and data used
in developing Aqueduct Floods.

## 基本信息

- 数据集编号（Earth Engine ID）：`WRI/Aqueduct_Water_Risk/V4/baseline_monthly`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：World Resources Institute、Google Earth Engine
- 时间范围：2010-01-01 至 2080-12-31
- 许可：proprietary
- 关键词：aqueduct, flood, monitoring, surface-ground-water, table, wri

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| fid_1 | INT | Feature Id |
| pfaf_id | INT | Six digit Pfafstetter code for the [hydrological basin](https://hydrosheds.org/page/hydrobasins) |
| bwd_01_cat | INT | Baseline water depletion category for January |
| bwd_01_label | STRING | Baseline water depletion label for January |
| bwd_01_raw | DOUBLE | Baseline water depletion raw value for January |
| bwd_01_score | DOUBLE | Baseline water depletion score for January |
| bwd_02_cat | INT | Baseline water depletion category for February |
| bwd_02_label | STRING | Baseline water depletion label for February |
| bwd_02_raw | DOUBLE | Baseline water depletion raw value for February |
| bwd_02_score | DOUBLE | Baseline water depletion score for February |
| bwd_03_cat | INT | Baseline water depletion category for March |
| bwd_03_label | STRING | Baseline water depletion label for March |
| bwd_03_raw | DOUBLE | Baseline water depletion raw value for March |
| bwd_03_score | DOUBLE | Baseline water depletion score for March |
| bwd_04_cat | INT | Baseline water depletion category for April |
| bwd_04_label | STRING | Baseline water depletion label for April |
| bwd_04_raw | DOUBLE | Baseline water depletion raw value for April |
| bwd_04_score | DOUBLE | Baseline water depletion score for April |
| bwd_05_cat | INT | Baseline water depletion category for May |
| bwd_05_label | STRING | Baseline water depletion label for May |
| bwd_05_raw | DOUBLE | Baseline water depletion raw value for May |
| bwd_05_score | DOUBLE | Baseline water depletion score for May |
| bwd_06_cat | INT | Baseline water depletion category for June |
| bwd_06_label | STRING | Baseline water depletion label for June |
| bwd_06_raw | DOUBLE | Baseline water depletion raw value for June |
| bwd_06_score | DOUBLE | Baseline water depletion score for June |
| bwd_07_cat | INT | Baseline water depletion category for July |
| bwd_07_label | STRING | Baseline water depletion label for July |
| bwd_07_raw | DOUBLE | Baseline water depletion raw value for July |
| bwd_07_score | DOUBLE | Baseline water depletion score for July |
| bwd_08_cat | INT | Baseline water depletion category for August |
| bwd_08_label | STRING | Baseline water depletion label for August |
| bwd_08_raw | DOUBLE | Baseline water depletion raw value for August |
| bwd_08_score | DOUBLE | Baseline water depletion score for August |
| bwd_09_cat | INT | Baseline water depletion category for September |
| bwd_09_label | STRING | Baseline water depletion label for September |
| bwd_09_raw | DOUBLE | Baseline water depletion raw value for September |
| bwd_09_score | DOUBLE | Baseline water depletion score for September |
| bwd_10_cat | INT | Baseline water depletion category for October |
| bwd_10_label | STRING | Baseline water depletion label for October |
| bwd_10_raw | DOUBLE | Baseline water depletion raw value for October |
| bwd_10_score | DOUBLE | Baseline water depletion score for October |
| bwd_11_cat | INT | Baseline water depletion category for November |
| bwd_11_label | STRING | Baseline water depletion label for November |
| bwd_11_raw | DOUBLE | Baseline water depletion raw value for November |
| bwd_11_score | DOUBLE | Baseline water depletion score for November |
| bwd_12_cat | INT | Baseline water depletion category for December |
| bwd_12_label | STRING | Baseline water depletion label for December |
| bwd_12_raw | DOUBLE | Baseline water depletion raw value for December |
| bwd_12_score | DOUBLE | Baseline water depletion score for December |
| bws_01_cat | INT | Baseline water stress category for January |
| bws_01_label | STRING | Baseline water stress label for January |
| bws_01_raw | DOUBLE | Baseline water stress raw value for January |
| bws_01_score | DOUBLE | Baseline water stress score for January |
| bws_02_cat | INT | Baseline water stress category for February |
| bws_02_label | STRING | Baseline water stress label for February |
| bws_02_raw | DOUBLE | Baseline water stress raw value for February |
| bws_02_score | DOUBLE | Baseline water stress score for February |
| bws_03_cat | INT | Baseline water stress category for March |
| bws_03_label | STRING | Baseline water stress label for March |
| bws_03_raw | DOUBLE | Baseline water stress raw value for March |
| bws_03_score | DOUBLE | Baseline water stress score for March |
| bws_04_cat | INT | Baseline water stress category for April |
| bws_04_label | STRING | Baseline water stress label for April |
| bws_04_raw | DOUBLE | Baseline water stress raw value for April |
| bws_04_score | DOUBLE | Baseline water stress score for April |
| bws_05_cat | INT | Baseline water stress category for May |
| bws_05_label | STRING | Baseline water stress label for May |
| bws_05_raw | DOUBLE | Baseline water stress raw value for May |
| bws_05_score | DOUBLE | Baseline water stress score for May |
| bws_06_cat | INT | Baseline water stress category for June |
| bws_06_label | STRING | Baseline water stress label for June |
| bws_06_raw | DOUBLE | Baseline water stress raw value for June |
| bws_06_score | DOUBLE | Baseline water stress score for June |
| bws_07_cat | INT | Baseline water stress category for July |
| bws_07_label | STRING | Baseline water stress label for July |
| bws_07_raw | DOUBLE | Baseline water stress raw value for July |
| bws_07_score | DOUBLE | Baseline water stress score for July |
| bws_08_cat | INT | Baseline water stress category for August |
| bws_08_label | STRING | Baseline water stress label for August |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('WRI/Aqueduct_Water_Risk/V4/baseline_monthly');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WRI_Aqueduct_Water_Risk_V4_baseline_monthly

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
