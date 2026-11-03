---
title: "WRI Aqueduct Baseline Annual Version 4.0"
date: 2026-11-03 12:00:00
permalink: /pages/82934379/
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

# WRI Aqueduct Baseline Annual Version 4.0

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

The WRI Aqueduct baseline annual dataset provides a comprehensive overview
of water-related risks on an annual basis which includes indicators such as
baseline water stress, baseline water depletion and interannual variability.
This annual data is essential for understanding long-term trends in water
risk, assessing the cumulative impacts of human activities on water
resources, and developing long-term water management strategies.

This [technical note](https://www.wri.org/research/aqueduct-40-updated-decision-relevant-global-water-risk-indicators)
explains in detail the framework, methodology, and data used
in developing Aqueduct Floods.

## 基本信息

- 数据集编号（Earth Engine ID）：`WRI/Aqueduct_Water_Risk/V4/baseline_annual`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：World Resources Institute、Google Earth Engine
- 时间范围：2010-01-01 至 2080-12-31
- 许可：proprietary
- 关键词：aqueduct, flood, monitoring, surface-ground-water, table, wri

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| aq30_id | INT | Unique identifier in numeric format |
| aqid | INT | Identifier for groundwater aquifers based on WHYMAP |
| area_km2 | DOUBLE | Area of the geometry in km2 (union of sub-basin, province and groundwater aquifer)  |
| gid_0 | STRING | ISO A3 country code based on [GADM](https://gadm.org/data.html) |
| gid_1 | STRING | Identifier for sub-national units based on the [GADM](https://gadm.org/data.html) dataset. It contains the ISO A3 country code, followed by numeric values separated by underscores for each sub-national unit.  |
| name_0 | STRING | National or political entity name based on [GADM](https://gadm.org/data.html) |
| name_1 | STRING | Sub-national or political entity name based on [GADM](https://gadm.org/data.html) |
| pfaf_id | INT | Six digit Pfafstetter code for the [hydrological basin](https://hydrosheds.org/page/hydrobasins) |
| string_id | STRING | Unique string for each geometry. Geometries are the union of hydrological basins, provinces and groundwater aquifers. The string_id is a combination of pfaf_id-gid_1-aqid. See the description of those columns.  |
| bws_cat | INT | Baseline water stress category |
| bws_label | STRING | Baseline water stress label |
| bws_raw | DOUBLE | Baseline water stress raw value |
| bws_score | DOUBLE | Baseline water stress score |
| bwd_cat | INT | Baseline water depletion category |
| bwd_label | STRING | Baseline water depletion label |
| bwd_raw | DOUBLE | Baseline water depletion raw value |
| bwd_score | DOUBLE | Baseline water depletion score |
| iav_cat | INT | Interannual variability category |
| iav_label | STRING | Interannual variability label |
| iav_raw | DOUBLE | Interannual variability raw value |
| iav_score | DOUBLE | Interannual variability score |
| sev_cat | INT | Seasonal variability category |
| sev_label | STRING | Seasonal variability label |
| sev_raw | DOUBLE | Seasonal variability raw value |
| sev_score | DOUBLE | Seasonal variability score |
| gtd_cat | INT | Groundwater table decline category |
| gtd_label | STRING | Groundwater table decline label |
| gtd_raw | DOUBLE | Groundwater table decline raw value |
| gtd_score | DOUBLE | Groundwater table decline score |
| rfr_cat | INT | Riverine flood risk category |
| rfr_label | STRING | Riverine flood risk label |
| rfr_raw | DOUBLE | Riverine flood risk raw value |
| rfr_score | DOUBLE | Riverine flood risk score |
| cfr_cat | INT | Coastal flood risk category |
| cfr_label | STRING | Coastal flood risk label |
| cfr_raw | DOUBLE | Coastal flood risk raw value |
| cfr_score | DOUBLE | Coastal flood risk score |
| drr_cat | INT | Drought risk category |
| drr_label | STRING | Drought risk label |
| drr_raw | DOUBLE | Drought risk raw value |
| drr_score | DOUBLE | Drought risk score |
| ucw_cat | INT | Untreated connected wastewater category |
| ucw_label | STRING | Untreated connected wastewater label |
| ucw_raw | DOUBLE | Untreated connected wastewater raw value |
| ucw_score | DOUBLE | Untreated connected wastewater score |
| udw_cat | INT | Unimproved/no drinking water category |
| udw_label | STRING | Unimproved/no drinking water label |
| udw_raw | DOUBLE | Unimproved/no drinking water raw value |
| udw_score | DOUBLE | Unimproved/no drinking water score |
| usa_cat | INT | Unimproved/no sanitation category |
| usa_label | STRING | Unimproved/no sanitation label |
| usa_raw | DOUBLE | Unimproved/no sanitation raw value |
| usa_score | DOUBLE | Unimproved/no sanitation score |
| cep_cat | INT | Coastal eutrophication potential category |
| cep_label | STRING | Coastal eutrophication potential label |
| cep_raw | DOUBLE | Coastal eutrophication potential raw value |
| cep_score | DOUBLE | Coastal eutrophication potential score |
| rri_cat | INT | Peak RepRisk country ESG risk index category |
| rri_label | STRING | Peak RepRisk country ESG risk index label |
| rri_raw | DOUBLE | Peak RepRisk country ESG risk index raw value |
| rri_score | DOUBLE | Peak RepRisk country ESG risk index score |
| w_awr_def_qan_cat | INT | Default weighting scheme is used to aggregate the category for the physical risk quantity group |
| w_awr_def_qan_label | STRING | Default weighting scheme is used to aggregate the label for the physical risk quantity group |
| w_awr_def_qan_raw | DOUBLE | Default weighting scheme is used to aggregate the raw value for the physical risk quantity group |
| w_awr_def_qan_score | DOUBLE | Default weighting scheme is used to aggregate the score for the physical risk quantity group |
| w_awr_def_qal_cat | INT | Default weighting scheme is used to aggregate the category for the physical risk quality group |
| w_awr_def_qal_label | STRING | Default weighting scheme is used to aggregate the label for the physical risk quality group |
| w_awr_def_qal_raw | DOUBLE | Default weighting scheme is used to aggregate the raw value for the physical risk quality group |
| w_awr_def_qal_score | DOUBLE | Default weighting scheme is used to aggregate the score for the physical risk quality group |
| w_awr_def_rrr_cat | INT | Default weighting scheme is used to aggregate the category for the regulatory and reputational risk group |
| w_awr_def_rrr_label | STRING | Default weighting scheme is used to aggregate the label for the regulatory and reputational risk group |
| w_awr_def_rrr_raw | DOUBLE | Default weighting scheme is used to aggregate the raw value for the regulatory and reputational risk group |
| w_awr_def_rrr_score | DOUBLE | Default weighting scheme is used to aggregate the score for the regulatory and reputational risk group |
| w_awr_def_tot_cat | INT | Default weighting scheme is used to aggregate the category for the total, overall water risk group |
| w_awr_def_tot_label | STRING | Default weighting scheme is used to aggregate the label for the total, overall water risk group |
| w_awr_def_tot_raw | DOUBLE | Default weighting scheme is used to aggregate the raw value for the total, overall water risk group |
| w_awr_def_tot_score | DOUBLE | Default weighting scheme is used to aggregate the score for the total, overall water risk group |
| w_awr_agr_qan_cat | INT | Agriculture weighting scheme is used to aggregate the category for the physical risk quantity group |
| w_awr_agr_qan_label | STRING | Agriculture weighting scheme is used to aggregate the label for the physical risk quantity group |
| w_awr_agr_qan_raw | DOUBLE | Agriculture weighting scheme is used to aggregate the raw value for the physical risk quantity group |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('WRI/Aqueduct_Water_Risk/V4/baseline_annual');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WRI_Aqueduct_Water_Risk_V4_baseline_annual

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
