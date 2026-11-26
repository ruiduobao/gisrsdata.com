---
title: "哨兵-5P 离线甲烷（L3）"
date: 2026-11-03 12:00:00
permalink: /pages/26f73ae7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "copernicus"
  - "esa"
  - "eu"
  - "knmi"
  - "methane"
  - "s5p"
  - "sentinel"
  - "sron"
  - "tropomi"
---

# 哨兵-5P 离线甲烷（L3）

英文原名：Sentinel-5P OFFL CH4: Offline Methane

## 这是什么数据

本数据集提供甲烷浓度的离线高分辨率影像。

甲烷（CH4）是仅次于二氧化碳（CO2）的、由人类活动增强的温室效应的第二大贡献者。约四分之三的甲烷排放来自人类活动，因此延续卫星测量记录很重要。TROPOMI 旨在提供对地表高度敏感、时空覆盖好、精度足以支撑源汇反演建模的 CH4 柱浓度。它利用氧 A 波段（760 纳米）和 SWIR 波段的吸收信息监测大气中的 CH4 丰度。[更多信息。](http://www.tropomi.eu/data-products/methane)

目前已知一些未被质量标志覆盖的数据质量问题，在查看甲烷产品和初步验证结果时应予留意。细节见 [MPC VDAF 网站](http://mpc-vdaf.tropomi.eu)。注意：2022-07-26 至 2022-08-31 期间因[提供方故障](https://scihub.copernicus.eu/news/News01082)无数据。

哨兵-5 先导星是欧洲空间局于 2017 年 10 月 13 日发射的空气污染监测卫星，星上传感器常被称为 Tropomi（对流层监测仪）。CH4 只有离线（OFFL）版；其他 S5P 数据集都有近实时（NRTI）和离线（OFFL）两个版本。NRTI 资产覆盖面积比 OFFL 小，但采集后出现得更快；OFFL 资产是单轨数据（因半个地球处于黑夜，实际只含一个半球）。由于数据噪声，垂直柱值常出现负值，尤其在洁净区域或 SO2 排放低时；建议不要过滤这些负值，只剔除异常值（即垂直柱低于 -0.001 mol/m^2 的值）。

原始哨兵-5P 二级（L2）数据按时间分箱，而不是按经纬度。为摄入 Earth Engine，每个 L2 产品被转换为 L3，每轨保留一个网格（不跨产品聚合）；跨越反经线的源产品摄入为后缀 _1、_2 的两个资产。L3 转换由 [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html) 工具用 bin_spatial 操作完成。源数据会过滤掉 QA 值低于以下阈值的像元：AER_AI 为 80%；NO2 的 tropospheric_NO2_column_number_density 波段为 75%；除 O3 和 SO2 外的其他数据集为 50%。O3_TCL 产品直接摄入（不运行 harpconvert）。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2019-02-08 至 2026-10-31

## 分辨率与规格

- 空间分辨率：约 1,113.2 米（约 1.11 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CH4_column_volume_mixing_ratio_dry_air | 甲烷的柱平均干空气混合比（十亿分之一，ppb） | 1113.2 |  |
| aerosol_height | CH4 反演中的气溶胶高度参数 | 1113.2 |  |
| aerosol_optical_depth | SWIR 波段的气溶胶光学厚度 | 1113.2 |  |
| sensor_azimuth_angle | 地面像元处卫星的方位角（WGS84），自北向东量 | 1113.2 |  |
| sensor_zenith_angle | 地面像元处卫星的天顶角（WGS84），偏离垂直方向量 | 1113.2 |  |
| solar_azimuth_angle | 地面像元处太阳的方位角（WGS84），自北向东量 | 1113.2 |  |
| solar_zenith_angle | 地面像元处太阳的天顶角（WGS84），偏离垂直方向量（原英文说明误写为卫星天顶角） | 1113.2 |  |
| CH4_column_volume_mixing_ratio_dry_air_bias_corrected | 经地表反照率订正的甲烷柱平均干空气混合比（十亿分之一，ppb） | 1113.2 |  |
| CH4_column_volume_mixing_ratio_dry_air_uncertainty | 甲烷柱平均干空气混合比的不确定度（1 西格玛误差） | 1113.2 |  |

```
harpconvert --format hdf5 --hdf5-compression 9
-a 'CH4_column_volume_mixing_ratio_dry_air_validity>50;derive(datetime_stop {time})'
S5P_OFFL_L2__CH4____20190223T202409_20190223T220540_07072_01_010202_20190301T221106.nc
grid_info.h5
```

## 能拿来做什么

- 甲烷排放源检测与反演建模
- 温室气体监测
- 油气与湿地排放研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CH4');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/OFFL/L3_CH4`
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_CH4

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, climate, copernicus, esa, eu, knmi, methane, s5p, sentinel, sron, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [哨兵-5P 离线一氧化碳（L3）](/pages/0bd864c8/)
- [哨兵-5P 离线二氧化氮（L3）](/pages/7fe826cd/)
- [哨兵-5P 离线二氧化硫（L3）](/pages/eff44f62/)
- [哨兵-5P 离线云属性（L3）](/pages/f29bba93/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
