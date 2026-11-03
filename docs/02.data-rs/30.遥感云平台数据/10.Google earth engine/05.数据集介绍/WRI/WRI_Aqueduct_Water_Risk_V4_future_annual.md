---
title: "WRI Aqueduct Future Annual Version 4.0"
date: 2026-11-03 12:00:00
permalink: /pages/0943ca32/
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

# WRI Aqueduct Future Annual Version 4.0

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

The WRI Aqueduct future annual dataset provides future projections of water
supply, demand, stress, depletion, and variability based on CMIP6 climate
projections for 3 milestone years: 2030, 2050, and 2080. This dataset can be
used to anticipate and adapt to future water challenges which will be useful
for water resource management, infrastructure development and climate change
adaptation.
This [technical note](https://www.wri.org/research/aqueduct-40-updated-decision-relevant-global-water-risk-indicators)
explains in detail the framework, methodology, and data used
in developing Aqueduct Floods.

## 基本信息

- 数据集编号（Earth Engine ID）：`WRI/Aqueduct_Water_Risk/V4/future_annual`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：World Resources Institute、Google Earth Engine
- 时间范围：2010-01-01 至 2080-12-31
- 许可：proprietary
- 关键词：aqueduct, flood, monitoring, surface-ground-water, table, wri

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| pfaf_id | INT | Six digit Pfafstetter code for the [hydrological basin](https://hydrosheds.org/page/hydrobasins) |
| fid | INT | Feature Id |
| bau30_ba_x_l | STRING | Available blue water label projected by year 2030 under business as usual scenario |
| bau30_ba_x_r | DOUBLE | Available blue water raw value projected by year 2030 under business as usual scenario |
| bau30_ww_x_l | STRING | Gross water demand label projected by year 2030 under business as usual scenario |
| bau30_ww_x_r | DOUBLE | Gross water demand raw value projected by year 2030 under business as usual scenario |
| bau30_ws_x_c | INT | Water stress category projected by year 2030 under business as usual scenario |
| bau30_ws_x_l | STRING | Water stress label projected by year 2030 under business as usual scenario |
| bau30_ws_x_r | DOUBLE | Water stress raw value projected by year 2030 under business as usual scenario |
| bau30_ws_x_s | DOUBLE | Water stress score projected by year 2030 under business as usual scenario |
| bau30_wd_x_c | INT | Baseline water depletion category projected by year 2030 under business as usual scenario |
| bau30_wd_x_l | STRING | Baseline water depletion label projected by year 2030 under business as usual scenario |
| bau30_wd_x_r | DOUBLE | Baseline water depletion raw value projected by year 2030 under business as usual scenario |
| bau30_wd_x_s | DOUBLE | Baseline water depletion score projected by year 2030 under business as usual scenario |
| bau30_iv_x_c | INT | Interannual variability category projected by year 2030 under business as usual scenario |
| bau30_iv_x_l | STRING | Interannual variability label projected by year 2030 under business as usual scenario |
| bau30_iv_x_r | DOUBLE | Interannual variability raw value projected by year 2030 under business as usual scenario |
| bau30_iv_x_s | DOUBLE | Interannual variability score projected by year 2030 under business as usual scenario |
| bau30_sv_x_c | INT | Seasonal variability category projected by year 2030 under business as usual scenario |
| bau30_sv_x_l | STRING | Seasonal variability label projected by year 2030 under business as usual scenario |
| bau30_sv_x_r | DOUBLE | Seasonal variability raw value projected by year 2030 under business as usual scenario |
| bau30_sv_x_s | DOUBLE | Seasonal variability score projected by year 2030 under business as usual scenario |
| bau50_ba_x_l | STRING | Available blue water label projected by year 2050 under business as usual scenario |
| bau50_ba_x_r | DOUBLE | Available blue water raw value projected by year 2050 under business as usual scenario |
| bau50_ww_x_l | STRING | Gross water demand label projected by year 2050 under business as usual scenario |
| bau50_ww_x_r | DOUBLE | Gross water demand raw value projected by year 2050 under business as usual scenario |
| bau50_ws_x_c | INT | Water stress category projected by year 2050 under business as usual scenario |
| bau50_ws_x_l | STRING | Water stress label projected by year 2050 under business as usual scenario |
| bau50_ws_x_r | DOUBLE | Water stress raw value projected by year 2050 under business as usual scenario |
| bau50_ws_x_s | DOUBLE | Water stress score projected by year 2050 under business as usual scenario |
| bau50_wd_x_c | INT | Baseline water depletion category projected by year 2050 under business as usual scenario |
| bau50_wd_x_l | STRING | Baseline water depletion label projected by year 2050 under business as usual scenario |
| bau50_wd_x_r | DOUBLE | Baseline water depletion raw value projected by year 2050 under business as usual scenario |
| bau50_wd_x_s | DOUBLE | Baseline water depletion score projected by year 2050 under business as usual scenario |
| bau50_iv_x_c | INT | Interannual variability category projected by year 2050 under business as usual scenario |
| bau50_iv_x_l | STRING | Interannual variability label projected by year 2050 under business as usual scenario |
| bau50_iv_x_r | DOUBLE | Interannual variability raw value projected by year 2050 under business as usual scenario |
| bau50_iv_x_s | DOUBLE | Interannual variability score projected by year 2050 under business as usual scenario |
| bau50_sv_x_c | INT | Seasonal variability category projected by year 2050 under business as usual scenario |
| bau50_sv_x_l | STRING | Seasonal variability label projected by year 2050 under business as usual scenario |
| bau50_sv_x_r | DOUBLE | Seasonal variability raw value projected by year 2050 under business as usual scenario |
| bau50_sv_x_s | DOUBLE | Seasonal variability score projected by year 2050 under business as usual scenario |
| bau80_ba_x_l | STRING | Available blue water label projected by year 2080 under business as usual scenario |
| bau80_ba_x_r | DOUBLE | Available blue water raw value projected by year 2080 under business as usual scenario |
| bau80_ww_x_l | STRING | Gross water demand label projected by year 2080 under business as usual scenario |
| bau80_ww_x_r | DOUBLE | Gross water demand raw value projected by year 2080 under business as usual scenario |
| bau80_ws_x_c | INT | Water stress category projected by year 2080 under business as usual scenario |
| bau80_ws_x_l | STRING | Water stress label projected by year 2080 under business as usual scenario |
| bau80_ws_x_r | DOUBLE | Water stress raw value projected by year 2080 under business as usual scenario |
| bau80_ws_x_s | DOUBLE | Water stress score projected by year 2080 under business as usual scenario |
| bau80_wd_x_c | INT | Baseline water depletion category projected by year 2080 under business as usual scenario |
| bau80_wd_x_l | STRING | Baseline water depletion label projected by year 2080 under business as usual scenario |
| bau80_wd_x_r | DOUBLE | Baseline water depletion raw value projected by year 2080 under business as usual scenario |
| bau80_wd_x_s | DOUBLE | Baseline water depletion score projected by year 2080 under business as usual scenario |
| bau80_iv_x_c | INT | Interannual variability category projected by year 2080 under business as usual scenario |
| bau80_iv_x_l | STRING | Interannual variability label projected by year 2080 under business as usual scenario |
| bau80_iv_x_r | DOUBLE | Interannual variability raw value projected by year 2080 under business as usual scenario |
| bau80_iv_x_s | DOUBLE | Interannual variability score projected by year 2080 under business as usual scenario |
| bau80_sv_x_c | INT | Seasonal variability category projected by year 2080 under business as usual scenario |
| bau80_sv_x_l | STRING | Seasonal variability label projected by year 2080 under business as usual scenario |
| bau80_sv_x_r | DOUBLE | Seasonal variability raw value projected by year 2080 under business as usual scenario |
| bau80_sv_x_s | DOUBLE | Seasonal variability score projected by year 2080 under business as usual scenario |
| opt30_ba_x_l | STRING | Available blue water label projected by year 2030 under optimistic scenario |
| opt30_ba_x_r | DOUBLE | Available blue water raw value projected by year 2030 under optimistic scenario |
| opt30_ww_x_l | STRING | Gross water demand label projected by year 2030 under optimistic scenario |
| opt30_ww_x_r | DOUBLE | Gross water demand raw value projected by year 2030 under optimistic scenario |
| opt30_ws_x_c | INT | Water stress category projected by year 2030 under optimistic scenario |
| opt30_ws_x_l | STRING | Water stress label projected by year 2030 under optimistic scenario |
| opt30_ws_x_r | DOUBLE | Water stress raw value projected by year 2030 under optimistic scenario |
| opt30_ws_x_s | DOUBLE | Water stress score projected by year 2030 under optimistic scenario |
| opt30_wd_x_c | INT | Baseline water depletion category projected by year 2030 under optimistic scenario |
| opt30_wd_x_l | STRING | Baseline water depletion label projected by year 2030 under optimistic scenario |
| opt30_wd_x_r | DOUBLE | Baseline water depletion raw value projected by year 2030 under optimistic scenario |
| opt30_wd_x_s | DOUBLE | Baseline water depletion score projected by year 2030 under optimistic scenario |
| opt30_iv_x_c | INT | Interannual variability category projected by year 2030 under optimistic scenario |
| opt30_iv_x_l | STRING | Interannual variability label projected by year 2030 under optimistic scenario |
| opt30_iv_x_r | DOUBLE | Interannual variability raw value projected by year 2030 under optimistic scenario |
| opt30_iv_x_s | DOUBLE | Interannual variability score projected by year 2030 under optimistic scenario |
| opt30_sv_x_c | INT | Seasonal variability category projected by year 2030 under optimistic scenario |
| opt30_sv_x_l | STRING | Seasonal variability label projected by year 2030 under optimistic scenario |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('WRI/Aqueduct_Water_Risk/V4/future_annual');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WRI_Aqueduct_Water_Risk_V4_future_annual

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
