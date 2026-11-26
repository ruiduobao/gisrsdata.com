---
title: "ECMWF 近实时 IFS 大气预报"
date: 2026-11-03 12:00:00
permalink: /pages/3fdfa56d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dewpoint"
  - "ecmwf"
  - "forecast"
  - "global"
  - "humidity"
  - "precipitation"
  - "pressure"
  - "radiation"
  - "rainfall"
  - "snow"
  - "soil-moisture"
  - "soil-temperature"
---

# ECMWF 近实时 IFS 大气预报

英文原名：ECMWF Near-Realtime IFS Atmospheric Forecasts

## 这是什么数据

本数据集包含 ECMWF 综合预报系统（IFS）在 0.25 度分辨率下生成的大气模式变量的 15 天预报。我们称之为近实时（NRT），因为新产品每天发布两次，紧随 ECMWF 实时预报数据的发布，本数据集是其子集。数据可在[正确署名](https://apps.ecmwf.int/datasets/licences/general/)的前提下分发与商业使用。

Earth Engine 中的产品自 [Cycle 49r1](https://confluence.ecmwf.int/display/FCST/Implementation+of+IFS+Cycle+49r1) 于 2024/11/12 实施起提供；更早的产品不包含在内。ECMWF NRT 数据集的使用通则见其[用户文档](https://confluence.ecmwf.int/display/DAC/ECMWF+open+data%3A+real-time+forecasts+from+IFS+and+AIFS)。源文件可在 [Google Cloud marketplace](https://console.cloud.google.com/marketplace/product/bigquery-public-data/open-data-ecmwf) 获取。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2024-11-12 至 2026-11-02
- 更新节奏：每天两次

## 分辨率与规格

- 空间分辨率：约 28,000 米（0.25 度格距）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| u_component_of_wind_100m_sfc | 地球表面上方 100 米高度处空气向东运动的水平速度。 | 28000 |  |
| v_component_of_wind_100m_sfc | 地球表面上方 100 米高度处空气向北运动的水平速度。 | 28000 |  |
| u_component_of_wind_10m_sfc | 地球表面上方 10 米高度处空气向东运动的水平速度。 | 28000 |  |
| v_component_of_wind_10m_sfc | 地球表面上方 10 米高度处空气向北运动的水平速度。 | 28000 |  |
| dewpoint_temperature_2m_sfc | 地球表面上方 2 米处空气冷却到发生饱和时的温度。 | 28000 |  |
| temperature_2m_sfc | 陆地、海洋或内陆水体表面上方 2 米处的空气温度。 | 28000 |  |
| snow_albedo_sfc | 整个太阳波谱范围内积雪反射的太阳（短波）辐射比例。 | 28000 |  |
| eastward_turbulent_surface_stress_sfc | 大气与地表之间湍流相互作用及湍流地形形态拖曳共同造成的、地球表面东向应力的累积量。 | 28000 |  |
| divergence_pl100 | 在 100 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| divergence_pl1000 | 在 1000 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| divergence_pl150 | 在 150 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| divergence_pl200 | 在 200 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| divergence_pl250 | 在 250 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| divergence_pl300 | 在 300 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| divergence_pl400 | 在 400 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| divergence_pl50 | 在 50 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| divergence_pl500 | 在 500 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| divergence_pl600 | 在 600 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| divergence_pl700 | 在 700 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| divergence_pl850 | 在 850 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| divergence_pl925 | 在 925 hPa 气压层测得的、空气自某点水平向外扩散的速率（每平方米）。本参数对向外扩散（辐散）的空气为正，对相反情形（空气汇聚，即辐合）为负。 | 28000 |  |
| geopotential_height_pl100 | 在 100 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| geopotential_height_pl1000 | 在 1000 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| geopotential_height_pl150 | 在 150 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| geopotential_height_pl200 | 在 200 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| geopotential_height_pl250 | 在 250 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| geopotential_height_pl300 | 在 300 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| geopotential_height_pl400 | 在 400 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| geopotential_height_pl50 | 在 50 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| geopotential_height_pl500 | 在 500 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| geopotential_height_pl600 | 在 600 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| geopotential_height_pl700 | 在 700 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| geopotential_height_pl850 | 在 850 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| geopotential_height_pl925 | 在 925 hPa 气压层上、大气中某点相对于其位能的高度的度量。由位势除以地球平均重力加速度 g 得到。 | 28000 |  |
| land_sea_mask_sfc | 陆地相对于海洋或内陆水体（湖泊、水库、河流与近岸水域）的比例。 | 28000 |  |
| mean_sea_level_pressure_sfc | 假设某点位于平均海平面处、该点所代表的地球表面区域上方整层气柱的空气重量的度量，对所有下垫面计算。 | 28000 |  |
| most_unstable_convective_available_potential_energy_sfc | 在从地表到 350 hPa 的大气中找出的、具有最大对流有效位能（CAPE，即可供对流利用的能量）的气块。 | 28000 |  |
| northward_turbulent_surface_stress_sfc | 大气与地表之间湍流相互作用及湍流地形形态拖曳共同造成的、地球表面北向应力的累积量。 | 28000 |  |
| precipitation_type_sfc | 地表降水类型：0 = 无降水；1 = 雨；3 = 冻雨（即过冷雨滴，与地面及其他表面接触时冻结）；5 = 雪；6 = 湿雪（即开始融化的雪粒）；7 = 雨雪混合；8 = 冰粒；12 = 冻毛毛雨（即过冷毛毛雨，与地面及其他表面接触时冻结） | 28000 |  |
| specific_humidity_pl100 | 在 100 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| specific_humidity_pl1000 | 在 1000 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| specific_humidity_pl150 | 在 150 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| specific_humidity_pl200 | 在 200 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| specific_humidity_pl250 | 在 250 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| specific_humidity_pl300 | 在 300 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| specific_humidity_pl400 | 在 400 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| specific_humidity_pl50 | 在 50 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| specific_humidity_pl500 | 在 500 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| specific_humidity_pl600 | 在 600 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| specific_humidity_pl700 | 在 700 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| specific_humidity_pl850 | 在 850 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| specific_humidity_pl925 | 在 925 hPa 气压层上、每千克湿空气（干空气、水汽、云液态水、云冰、雨与下落中的雪之和）所含的水汽质量。 | 28000 |  |
| relative_humidity_pl100 | 在 100 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| relative_humidity_pl1000 | 在 1000 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| relative_humidity_pl150 | 在 150 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| relative_humidity_pl200 | 在 200 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| relative_humidity_pl250 | 在 250 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| relative_humidity_pl300 | 在 300 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| relative_humidity_pl400 | 在 400 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| relative_humidity_pl50 | 在 50 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| relative_humidity_pl500 | 在 500 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| relative_humidity_pl600 | 在 600 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| relative_humidity_pl700 | 在 700 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| relative_humidity_pl850 | 在 850 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| relative_humidity_pl925 | 在 925 hPa 气压层上、水汽压占空气达到饱和（水汽开始凝结为液态水或凝华为冰）时水汽压的百分比。 | 28000 |  |
| runoff_sfc | 自预报 0 时起的累积量度：未被土壤吸收的、来自降雨、融雪等的水量。它是水均匀铺展在格箱上时的深度。 | 28000 |  |
| sea_ice_thickness_sfc | 海冰厚度。 | 28000 |  |
| skin_temperature_sfc | 地球表面的温度。代表最上层表层的温度；该层没有热容量，因而能对表面通量的变化即时响应。 | 28000 |  |
| soil_temperature_sol1 | 地表以下第 1 层（0–7 厘米）中部的土壤温度。 | 28000 |  |
| soil_temperature_sol2 | 地表以下第 2 层（7–28 厘米）中部的土壤温度。 | 28000 |  |
| soil_temperature_sol3 | 地表以下第 3 层（28–100 厘米）中部的土壤温度。 | 28000 |  |
| soil_temperature_sol4 | 地表以下第 4 层（100–289 厘米）中部的土壤温度。 | 28000 |  |
| surface_pressure_sfc | 陆地、海洋与内陆水体表面上的大气压强（单位面积上的力）。它度量的是地球表面某固定点所代表区域上方整层气柱的空气重量。 | 28000 |  |
| surface_net_solar_radiation_sfc | 自预报 0 时起的累积量度：到达地球表面一个水平面的太阳辐射（直接与漫射）量减去被地球表面反射的量。 | 28000 |  |
| surface_solar_radiation_downwards_sfc | 自预报 0 时起的累积量度：到达地球表面一个水平面的太阳辐射（直接与漫射）量。 | 28000 |  |
| surface_net_thermal_radiation_sfc | 自预报 0 时起的累积量度：地球表面向下与向上热辐射之差，其中热辐射指大气、云与地表发射的辐射。（原文「download」为「downward」之误，照义译出。） | 28000 |  |
| surface_thermal_radiation_downwards_sfc | 自预报 0 时起的累积量度：由大气与云发射、到达地球表面一个水平面的热辐射量。 | 28000 |  |
| eastward_surface_sea_water_velocity_sfc | 向东运动的海水流速。 | 28000 |  |
| northward_surface_sea_water_velocity_sfc | 向北运动的海水流速。 | 28000 |  |
| temperature_pl100 | 100 hPa 气压层上的大气温度。 | 28000 |  |

## 能拿来做什么

- 15 天天气预报与灾害预警
- 台风、暴雨等极端天气过程跟踪
- 预报产品开发与检验

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('ECMWF/NRT_FORECAST/IFS/OPER');
```

- 数据集编号（Earth Engine ID）：`ECMWF/NRT_FORECAST/IFS/OPER`
- 提供方：ECMWF、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ECMWF_NRT_FORECAST_IFS_OPER

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：dewpoint, ecmwf, forecast, global, humidity, precipitation, pressure, radiation, rainfall, snow, soil-moisture, soil-temperature, temperature, weather-and-climate, wind
- DOI：10.21957/open-data

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CFSR: Climate Forecast System Reanalysis Harmonized](/pages/a2388741/)
- [CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized](/pages/a1cd75f1/)
- [Daymet V4: Daily Surface Weather and Climatological Summaries](/pages/7b6d050e/)
- [ERA5-Land Daily Aggregated - ECMWF Climate Reanalysis](/pages/a05a1bb7/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
