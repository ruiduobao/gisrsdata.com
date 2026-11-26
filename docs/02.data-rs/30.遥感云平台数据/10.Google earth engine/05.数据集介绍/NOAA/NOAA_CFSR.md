---
title: "CFSR：气候预报系统再分析 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/5248cf0f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "daylight"
  - "flux"
  - "forecast"
  - "geophysical"
  - "ncep"
  - "noaa"
  - "nws"
  - "precipitation"
  - "radiation"
  - "snow"
  - "temperature"
---

# CFSR：气候预报系统再分析 [已弃用]

英文原名：CFSR: Climate Forecast System Reanalysis [deprecated]

## 这是什么数据

自 2025 年 10 月 22 日起，本数据集温度波段改用摄氏而非开尔文单位。温度单位一致（开尔文）请使用 [NOAA/CFSR_HARMONIZED](https://developers.google.com/earth-engine/datasets/catalog/NOAA_CFSR_HARMONIZED)。

国家环境预测中心（NCEP）气候预报系统再分析（CFSR）被设计并执行为一个全球高分辨率耦合大气-海洋-陆面-海冰系统，在 1979 年 1 月至 2011 年 3 月的 32 年记录时段内提供这些耦合域状态的最佳估计。它已扩展为业务实时产品。Earth Engine 中的数据仅从 2018 年 12 月 13 日起存在。

预报每天初始化四次（0000、0600、1200 与 1800 UTC）。我们仅从匹配 `cdas1.t??z.pgrbh**03|00**.grib2` 的文件中摄入波段子集，即仅 0 小时与 3 小时预报的文件，其他被省略。预报长度由「forecast_hour」元数据字段指示。

一些影像仅包含波段子集。将本数据集与「00」和「03」两种预报类型一起使用，需要在集合间转换波段。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2018 年至 2026 年；分辨率：55,660 米。
- 时间范围：2018-12-13 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 55,660 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| u-component_of_wind_hybrid | 混合层风的 u 分量，00 与 03 预报。 | 55660 |  |
| v-component_of_wind_hybrid | 混合层风的 v 分量，00 与 03 预报。 | 55660 |  |
| Albedo_surface_3_Hour_Average | 反照率 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Canopy_water_evaporation_surface_3_Hour_Average | 冠层水蒸发 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Categorical_Rain_surface | 分类雨，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Categorical_Rain_surface_3_Hour_Average | 分类雨 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Categorical_Freezing_Rain_surface_3_Hour_Average | 分类冻雨 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Categorical_Ice_Pellets_surface_3_Hour_Average | 分类冰粒 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Categorical_Snow_surface_3_Hour_Average | 分类雪 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Clear_Sky_Downward_Long_Wave_Flux_surface_3_Hour_Average | 晴空向下长波通量 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Clear_Sky_Downward_Solar_Flux_surface_3_Hour_Average | 晴空向下太阳通量 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Clear_Sky_Upward_Long_Wave_Flux_surface_3_Hour_Average | 晴空向上长波通量 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Clear_Sky_Upward_Solar_Flux_atmosphere_top_3_Hour_Average | 晴空向上太阳通量 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Clear_sky_UV-B_Downward_Solar_Flux_surface_3_Hour_Average | 晴空 UV-B 向下太阳通量 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Cloud_water_entire_atmosphere_single_layer | 云水，位于整个大气层，00 与 03 预报。 | 55660 |  |
| Cloud_Work_Function_entire_atmosphere_single_layer_3_Hour_Average | 云功函数 3 小时平均，位于整个大气层，03 预报。 | 55660 |  |
| Convective_available_potential_energy_surface | 对流可用势能，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Convective_available_potential_energy_pressure_difference_layer | 对流可用势能，位于从地面到层指定气压差处，03 预报。 | 55660 |  |
| Convective_Precipitation_Rate_surface_3_Hour_Average | 对流降水率 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Convective_precipitation_surface_3_Hour_Accumulation | 对流降水 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Direct_Evaporation_from_Bare_Soil_surface_3_Hour_Average | 裸土直接蒸发 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Downward_Long-Wave_Radp_Flux_surface | 向下长波辐射通量，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Downward_Long-Wave_Radp_Flux_surface_3_Hour_Average | 向下长波辐射通量 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Downward_Short-Wave_Radiation_Flux_surface | 向下短波辐射通量，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Downward_Short-Wave_Radiation_Flux_surface_3_Hour_Average | 向下短波辐射通量 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Downward_Short-Wave_Radiation_Flux_atmosphere_top_3_Hour_Average | 向下短波辐射通量大气顶 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Exchange_Coefficient_surface | 交换系数，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Frictional_Velocity_surface | 摩擦速度，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Ground_Heat_Flux_surface | 地面热通量，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Ground_Heat_Flux_surface_3_Hour_Average | 地面热通量 4 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Ice_cover_surface | 冰覆盖，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Ice_thickness_surface | 冰厚，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Land_cover_0__sea_1__land_surface | 土地覆盖（0 = 海，1 = 陆），位于地面或水面，00 与 03 预报。 | 55660 |  |
| Latent_heat_net_flux_surface | 潜热净通量，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Latent_heat_net_flux_surface_3_Hour_Average | 潜热净通量 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_5_cm | 液态体积土壤水分（未冻结），地表层以下 5 厘米深度。 | 55660 |  |
| Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_25_cm | 液态体积土壤水分（未冻结），地表层以下 25 厘米深度。 | 55660 |  |
| Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_70_cm | 液态体积土壤水分（未冻结），地表层以下 50 厘米深度。 | 55660 |  |
| Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_150_cm | 液态体积土壤水分（未冻结），地表层以下 150 厘米深度。 | 55660 |  |
| Maximum_temperature_height_above_ground_3_Hour_Interval | 3 小时间隔的最高温度，位于指定地面以上高度层，03 预报。 | 55660 |  |
| Minimum_temperature_height_above_ground_3_Hour_Interval | 3 小时间隔的最低温度，位于指定地面以上高度层，03 预报。 | 55660 |  |
| Maximum_specific_humidity_at_2m_height_above_ground_3_Hour_Interval | 3 小时间隔的最大比湿，位于 2 米指定地面以上高度层，03 预报。 | 55660 |  |
| Minimum_specific_humidity_at_2m_height_above_ground_3_Hour_Interval | 3 小时间隔的最小比湿，位于 2 米指定地面以上高度层，03 预报。 | 55660 |  |
| Momentum_flux_u-component_surface_3_Hour_Average | 动量通量 u 分量 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Momentum_flux_v-component_surface_3_Hour_Average | 动量通量 u 分量 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Plant_Canopy_Surface_Water_surface | 植物冠层地表水，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Planetary_Boundary_Layer_Height_surface | 行星边界层高度，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Potential_Evaporation_Rate_surface | 潜在蒸发率，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Potential_Evaporation_Rate_surface_3_Hour_Average | 潜在蒸发率 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Precipitation_rate_surface_3_Hour_Average | 可降水率 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Precipitable_water_entire_atmosphere_single_layer | 可降水量，位于整个大气层，00 与 03 预报。 | 55660 |  |
| Precipitable_water_pressure_difference_layer | 可降水量，位于从地面到层指定气压差处，00 预报。 | 55660 |  |
| Pressure_msl | 平均海平面气压，03 预报。 | 55660 |  |
| Pressure_reduced_to_MSL_msl | 订正到 MSL 的气压，位于平均海平面，00 与 03 预报。 | 55660 |  |
| Pressure_surface | 气压，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Relative_humidity_entire_atmosphere_single_layer | 相对湿度，位于整个大气层，00 与 03 预报。 | 55660 |  |
| Sensible_heat_net_flux_surface | 感热净通量，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Sensible_heat_net_flux_surface_3_Hour_Average | 感热净通量 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Snow_Cover_surface_3_Hour_Average | 雪覆盖 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Snow_depth_surface | 雪深，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Snow_Phase_Change_Heat_Flux_surface_3_Hour_Average | 雪相变热通量 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Soil_moisture_content_depth_below_surface_layer | 土壤水分含量，位于地表以下层，00 与 03 预报。 | 55660 |  |
| Soil_type_surface | 土壤类型，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Storm_Surface_Runoff_surface_3_Hour_Accumulation | 风暴地表径流 3 小时累积，位于地面或水面，03 预报。 | 55660 |  |
| Sublimation_evaporation_from_snow_surface_3_Hour_Average | 升华（雪的蒸发） 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Specific_humidity_height_above_ground | 比湿，位于指定地面以上高度层，00 预报。 | 55660 |  |
| Surface_Lifted_Index_surface | 地表抬升指数，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Surface_roughness_surface | 地表粗糙度，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Surface_Slope_Type_surface | 地表坡度类型，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Temperature_depth_below_surface_layer_5_cm | 温度，地表层以下 5 厘米深度，00 与 03 预报。 | 55660 |  |
| Temperature_depth_below_surface_layer_25_cm | 温度，地表层以下 25 厘米深度，00 与 03 预报。 | 55660 |  |
| Temperature_depth_below_surface_layer_70_cm | 温度，地表层以下 70 厘米深度，00 与 03 预报。 | 55660 |  |
| Temperature_depth_below_surface_layer_150_cm | 温度，地表层以下 150 厘米深度，00 与 03 预报。 | 55660 |  |
| Temperature_height_above_ground | 温度，位于指定地面以上高度层，00 预报。 | 55660 |  |
| Temperature_surface | 温度，位于地面或水面，00 与 03 预报。 | 55660 |  |
| Total_cloud_cover_convective_cloud | 总云量，位于对流云层，00 预报。 | 55660 |  |
| Total_ozone_entire_atmosphere_single_layer | 总臭氧，位于整个大气层，00 与 03 预报。 | 55660 |  |
| Total_precipitation_surface_3_Hour_Accumulation | 总降水 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Transpiration_surface_3_Hour_Average | 蒸腾地表 3 小时平均，位于地面或水面，03 预报。 | 55660 |  |
| Upward_Long-Wave_Radp_Flux_surface | 向上长波辐射通量，位于地面或水面，00 与 03 预报。 | 55660 |  |

## 能拿来做什么

- 气候预报系统再分析
- 天气与气候建模
- 大气变量分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CFSR');
```

- 数据集编号（Earth Engine ID）：`NOAA/CFSR`
- 提供方：NOAA NWS National Centers for Environmental Prediction (NCEP)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CFSR

## 许可与引用

- 许可：proprietary
- 关键词：climate, daylight, flux, forecast, geophysical, ncep, noaa, nws, precipitation, radiation, snow, temperature, vapor, water, weather, weather-and-climate
- 数据引用：Saha, S., S. Moorthi, H. Pan, X. Wu, J. Wang, and Coauthors, 2010: The NCEP
Climate Forecast System Reanalysis. Bulletin of the American Meteorological
Society, 91, 1015-1057.
[doi:10.1175/2010BAMS3001.1](https://doi.org/10.1175/2010BAMS3001.1)

- DOI：10.5065/D6513W89

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CFSR：气候预报系统再分析（协调版）](/pages/a2388741/)
- [CFSV2：NCEP 气候预报系统版本 2，6 小时产品（协调版）](/pages/a1cd75f1/)
- [Daymet V4：逐日地表天气与气候学汇总](/pages/7b6d050e/)
- [ECMWF 近实时 IFS 大气预报](/pages/3fdfa56d/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
