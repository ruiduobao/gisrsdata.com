---
title: "SPL4SMGP.008 SMAP 四级全球 3 小时 9 千米地表与根区土壤水分"
date: 2026-11-03 12:00:00
permalink: /pages/abac2346/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "drought"
  - "nasa"
  - "smap"
  - "soil"
  - "soil-moisture"
  - "surface"
  - "weather"
---

# SPL4SMGP.008 SMAP 四级全球 3 小时 9 千米地表与根区土壤水分

英文原名：SPL4SMGP.008 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture

## 这是什么数据

SMAP 四级（L4）土壤水分产品包括地表土壤水分（0–5 厘米垂直平均）、根区土壤水分（0–100 厘米垂直平均），以及额外的研究产品（未经验证），包括地表气象强迫变量、土壤温度、蒸散与净辐射。 本数据集正式名称为 SMAP L4 全球 3 小时 9 千米 EASE-Grid 地表与根区土壤水分地球物理数据（SPL4SMGP），被认为是大多数 SMAP 四级（L4）土壤水分数据用户的主要关注产品。

SMAP L4 提供不间断的土壤水分数据。在 SMAP 仪器中断期间，SMAP L4 土壤水分仅基于陆面模式模拟，没有同时同化 SMAP 亮温观测。显著的 SMAP 仪器中断发生在 2019 年 6 月 19 日至 7 月 23 日之间以及 2022 年 8 月 6 日至 9 月 20 日之间。

来自下降与上升半轨道卫星过境（分别约为当地太阳时上午 6:00 与下午 6:00）的 SMAP L 波段亮温数据被同化进一个陆面模式，该模式使用地球固定、全球圆柱 9 千米等面积可缩放地球格网第 2.0 版（EASE-Grid 2.0）投影格网化。

SPL4SMGP 产品包括来自同化系统的一系列 3 小时时间平均地球物理数据场。SPL4SMGP 数据在摄入 Google Earth Engine 之前，使用 GDAL 库[转换为地理坐标](https://github.com/google/earthengine-catalog/blob/main/pipelines/smap_convert_l4.py)。

更多文档与算法细节见 [SMAP L4 土壤水分用户指南](https://nsidc.org/sites/default/files/documents/user-guide/multi_spl4smau-v007-userguide.pdf) 及其参考文献。

见 [基础](https://developers.google.com/earth-engine/tutorials/community/smap-soil-moisture) 与 [高级](https://developers.google.com/earth-engine/tutorials/community/anomalies-analysis-smo-and-pre) 教程学习如何在 Earth Engine 中使用 SMAP 数据。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2015 年至 2026 年；分辨率：11,000 米。
- 时间范围：2015-03-31 至 2026-10-31

## 分辨率与规格

- 空间分辨率：约 11,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sm_surface | 表层土壤水分（0–5 厘米）。 | 11000 |  |
| sm_rootzone | 根区土壤水分（0–100 厘米）。 | 11000 |  |
| sm_profile | 总剖面土壤水分（0 厘米至模式基岩深度）。 | 11000 |  |
| sm_surface_wetness | 表层土壤湿度（0–5 厘米；湿度单位）。土壤湿度单位（无量纲）在 0 与 1 之间变化，分别指示完全干燥条件与完全饱和条件之间的相对饱和度。 | 11000 |  |
| sm_rootzone_wetness | 根区土壤湿度（0–100 厘米；湿度单位）。土壤湿度单位（无量纲）在 0 与 1 之间变化，分别指示完全干燥条件与完全饱和条件之间的相对饱和度。 | 11000 |  |
| sm_profile_wetness | 总剖面土壤湿度（0 厘米至模式基岩深度；湿度单位）。土壤湿度单位（无量纲）在 0 与 1 之间变化，分别指示完全干燥条件与完全饱和条件之间的相对饱和度。 | 11000 |  |
| surface_temp | 平均陆面温度（包括雪盖陆地区域）。不包括开阔水域与永久冰区域。 | 11000 |  |
| soil_temp_layer1 | 土壤热扩散模式第 1 层土壤温度。 | 11000 |  |
| soil_temp_layer2 | 土壤热扩散模式第 2 层土壤温度。 | 11000 |  |
| soil_temp_layer3 | 土壤热扩散模式第 3 层土壤温度。 | 11000 |  |
| soil_temp_layer4 | 土壤热扩散模式第 4 层土壤温度。 | 11000 |  |
| soil_temp_layer5 | 土壤热扩散模式第 5 层土壤温度。 | 11000 |  |
| soil_temp_layer6 | 土壤热扩散模式第 6 层土壤温度。 | 11000 |  |
| snow_mass | 格网单元陆地分数上的平均雪质量（或雪水当量）。 | 11000 |  |
| snow_depth | 格网单元雪盖陆地分数内的雪深。 | 11000 |  |
| land_evapotranspiration_flux | 陆地蒸散。 | 11000 |  |
| overland_runoff_flux | 地表（表面）径流（包括壤中流）。 | 11000 |  |
| baseflow_flux | 基流。 | 11000 |  |
| snow_melt_flux | 融雪。 | 11000 |  |
| soil_water_infiltration_flux | 土壤水入渗率。 | 11000 |  |
| land_fraction_saturated | 饱和且无雪的陆地面积分数。 | 11000 |  |
| land_fraction_unsaturated | 非饱和（但未萎蔫）且无雪的陆地面积分数。 | 11000 |  |
| land_fraction_wilting | 萎蔫且无雪的陆地面积分数。 | 11000 |  |
| land_fraction_snow_covered | 雪盖陆地面积分数。 | 11000 |  |
| heat_flux_sensible | 陆地感热通量。 | 11000 |  |
| heat_flux_latent | 陆地潜热通量。 | 11000 |  |
| heat_flux_ground | 进入土壤热扩散模式第 1 层的向下地面热通量。 | 11000 |  |
| net_downward_shortwave_flux | 陆地净向下短波通量。 | 11000 |  |
| net_downward_longwave_flux | 陆地净向下长波通量。 | 11000 |  |
| radiation_shortwave_downward_flux | 入射地表的向下短波通量。 | 11000 |  |
| radiation_longwave_absorbed_flux | 地表吸收的（向下）长波辐射。 | 11000 |  |
| precipitation_total_surface_flux | 总地表降水（包括降雪）。 | 11000 |  |
| snowfall_surface_flux | 地表降雪。 | 11000 |  |
| surface_pressure | 平均陆面温度（包括雪盖陆地区域）。 | 11000 |  |
| height_lowatmmodlay | 最低大气模式层的中心高度。 | 11000 |  |
| temp_lowatmmodlay | 最低大气模式层中心高度处的气温。 | 11000 |  |
| specific_humidity_lowatmmodlay | 最低大气模式层中心高度处的空气比湿。 | 11000 |  |
| windspeed_lowatmmodlay | 最低大气模式层中心高度处的地表风速。 | 11000 |  |
| vegetation_greenness_fraction | 植被「绿度」或格网单元陆地面积*上平均的蒸腾叶分数。 | 11000 |  |
| leaf_area_index | 植被叶面积指数。 | 11000 |  |
| sm_rootzone_pctl | 根区土壤水分（0–100 厘米；百分位单位）。 | 11000 |  |
| sm_profile_pctl | 总剖面土壤水分（0 厘米至模式基岩深度；百分位单位）。 | 11000 |  |
| depth_to_water_table_from_surface_in_peat | 泥炭地中从平均地表高程起的地下水位深度（地面以上为正）。 | 11000 |  |
| free_surface_water_on_peat_flux | 泥炭地上自由地表水储量的变化。 | 11000 |  |
| mwrtm_vegopacity | 微波辐射传输模式：植被不透明度。 | 11000 |  |
| sm_surface_anomaly | 实验性。以资产日期为中心的 sm_surface 的 30 天平均，相对于 2015 年至今（不包括资产年份）同 30 天时段跨年平均的差。异常计算见[此脚本](https://github.com/google/earthengine-community/blob/master/datasets/smap_anomaly_l4.py)。 | 11000 |  |

## 能拿来做什么

- 全球土壤水分监测
- 干旱监测
- 水文与农业应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/SMAP/SPL4SMGP/008');
```

- 数据集编号（Earth Engine ID）：`NASA/SMAP/SPL4SMGP/008`
- 提供方：Google and NSIDC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_SMAP_SPL4SMGP_008

## 许可与引用

- 许可：proprietary
- 关键词：drought, nasa, smap, soil, soil-moisture, surface, weather
- 数据引用：Reichle, R., De Lannoy, G., Koster, R. D., Crow, W. T., Kimball, J. S.,
Liu, Q. & Bechtold, M. (2025). SMAP L4 Global 3-hourly 9 km EASE-Grid
Surface and Root Zone Soil Moisture Geophysical Data. (SPL4SMGP, Version 8).
[Data Set]. Boulder, Colorado USA. NASA National Snow and Ice Data Center
Distributed Active Archive Center.
[doi:10.5067/T5RUATAQREF8](https://doi.org/10.5067/T5RUATAQREF8)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [SPL3SMP_E.005 SMAP L3 Radiometer Global Daily 9 km Soil Moisture](/pages/ff73e36e/)
- [SPL3SMP_E.006 SMAP L3 Radiometer Global Daily 9 km Soil Moisture](/pages/bb174530/)
- [SPL4SMGP.007 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture [deprecated]](/pages/d36e17a5/)
- [SoilGrids250m 2.0 土壤体积含水量](/pages/ec88a629/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
