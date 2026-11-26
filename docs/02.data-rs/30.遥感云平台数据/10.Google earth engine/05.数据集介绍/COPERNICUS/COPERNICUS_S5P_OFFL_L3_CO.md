---
title: "哨兵-5P 离线一氧化碳（L3）"
date: 2026-11-03 12:00:00
permalink: /pages/0bd864c8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-quality"
  - "atmosphere"
  - "carbon-monoxide"
  - "copernicus"
  - "esa"
  - "eu"
  - "knmi"
  - "pollution"
  - "s5p"
  - "sentinel"
  - "sron"
  - "tropomi"
---

# 哨兵-5P 离线一氧化碳（L3）

英文原名：Sentinel-5P OFFL CO: Offline Carbon Monoxide

## 这是什么数据

本数据集提供 CO 浓度的离线高分辨率影像。

一氧化碳（CO）是理解对流层化学的重要大气痕量气体，在某些城市地区是主要大气污染物。CO 的主要来源是化石燃料燃烧、生物质燃烧，以及甲烷和其他碳氢化合物的大气氧化。在北半球中纬度，化石燃料燃烧是 CO 的主要来源；在热带，异戊二烯氧化和生物质燃烧起重要作用。哨兵-5 先导星（S5P）上的 TROPOMI 利用太阳光谱短波红外（SWIR）部分 2.3 微米波段的晴空与多云地球辐亮度测量，观测全球 CO 丰度。TROPOMI 晴空观测提供对对流层边界层敏感的 CO 总柱；多云大气时，柱敏感性随光程变化。[更多信息。](http://www.tropomi.eu/data-products/carbon-monoxide)

哨兵-5 先导星是欧洲空间局于 2017 年 10 月 13 日发射的空气污染监测卫星，星上传感器常被称为 Tropomi（对流层监测仪）。除 CH4 外，全部 S5P 数据集都有近实时（NRTI）和离线（OFFL）两个版本，CH4 只有 OFFL 版。NRTI 资产覆盖面积比 OFFL 小，但采集后出现得更快；OFFL 资产是单轨数据（因半个地球处于黑夜，实际只含一个半球）。由于数据噪声，垂直柱值常出现负值，尤其在洁净区域或 SO2 排放低时；建议不要过滤这些负值，只剔除异常值（即垂直柱低于 -0.001 mol/m^2 的值）。

原始哨兵-5P 二级（L2）数据按时间分箱，而不是按经纬度。为摄入 Earth Engine，每个 L2 产品被转换为 L3，每轨保留一个网格（不跨产品聚合）；跨越反经线的源产品摄入为后缀 _1、_2 的两个资产。L3 转换由 [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html) 工具用 bin_spatial 操作完成。源数据会过滤掉 QA 值低于以下阈值的像元：AER_AI 为 80%；NO2 的 tropospheric_NO2_column_number_density 波段为 75%；除 O3 和 SO2 外的其他数据集为 50%。O3_TCL 产品直接摄入（不运行 harpconvert）。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2018-06-28 至 2026-10-31

## 分辨率与规格

- 空间分辨率：约 1,113.2 米（约 1.11 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CO_column_number_density | 垂直积分的 CO 柱密度 | 1113.2 |  |
| H2O_column_number_density | 水汽柱 | 1113.2 |  |
| cloud_height | 散射层高度 | 1113.2 |  |
| sensor_altitude | 卫星相对大地星下点（WGS84）的高度 | 1113.2 |  |
| sensor_azimuth_angle | 地面像元处卫星的方位角（WGS84），自北向东量 | 1113.2 |  |
| sensor_zenith_angle | 地面像元处卫星的天顶角（WGS84），偏离垂直方向量 | 1113.2 |  |
| solar_azimuth_angle | 地面像元处太阳的方位角（WGS84），自北向东量 | 1113.2 |  |
| solar_zenith_angle | 地面像元处太阳的天顶角（WGS84），偏离垂直方向量（原英文说明误写为卫星天顶角） | 1113.2 |  |

```
harpconvert --format hdf5 --hdf5-compression 9
-a 'CO_column_number_density_validity>50;derive(datetime_stop {time})'
S5P_OFFL_L2__CO_____20181031T060643_20181031T074813_05432_01_010200_20181106T052542.nc
grid_info.h5
```

## 能拿来做什么

- 化石燃料燃烧与生物质燃烧的 CO 污染监测
- 对流层化学研究
- 火灾排放追踪

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CO');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/OFFL/L3_CO`
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_CO

## 许可与引用

- 许可：proprietary
- 关键词：air-quality, atmosphere, carbon-monoxide, copernicus, esa, eu, knmi, pollution, s5p, sentinel, sron, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [哨兵-5P 离线二氧化氮（L3）](/pages/7fe826cd/)
- [哨兵-5P 离线二氧化硫（L3）](/pages/eff44f62/)
- [哨兵-5P 离线云属性（L3）](/pages/f29bba93/)
- [哨兵-5P 离线对流层臭氧（L3）](/pages/469453b0/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
