---
title: "哨兵-5P 近实时臭氧（L3）"
date: 2026-11-03 12:00:00
permalink: /pages/8433d874/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-quality"
  - "atmosphere"
  - "copernicus"
  - "esa"
  - "eu"
  - "o3"
  - "ozone"
  - "pollution"
  - "s5p"
  - "sentinel"
  - "tropomi"
---

# 哨兵-5P 近实时臭氧（L3）

英文原名：Sentinel-5P NRTI O3: Near Real-Time Ozone

## 这是什么数据

本数据集提供臭氧总柱浓度的近实时高分辨率影像。对流层柱数据另见 COPERNICUS/S5P/OFFL/L3_O3_TCL。

在平流层，臭氧层保护生物圈免受危险的太阳紫外辐射。在对流层，臭氧是高效的清洁剂，但高浓度时也会危害人类、动物和植被健康。臭氧还是当前气候变化的重要温室气体贡献者。自 1980 年代发现南极臭氧洞、随后《蒙特利尔议定书》管控含氯臭氧消耗物质的生产以来，臭氧一直从地面和太空常规监测。

本产品有两种给出臭氧总量的算法：近实时用 GDP，离线产品用 GODFIT。GDP 目前用于 GOME、SCIAMACHY 和 GOME-2 的业务化臭氧总量产品；GODFIT 用于 ESA CCI 和哥白尼 C3S 项目。[更多信息。](https://www.tropomi.eu/data-products/ozone-total-column)[产品用户手册。](https://sentinels.copernicus.eu/documents/247904/2474726/Sentinel-5P-Level-2-Product-User-Manual-Ozone-Total-Column)

NRTI L3 产品的格网化使用 [harpconvert](https://stcorp.github.io/harp/doc/html/harpconvert.html) 完成。

哨兵-5 先导星是欧洲空间局于 2017 年 10 月 13 日发射的空气污染监测卫星，星上传感器常被称为 Tropomi（对流层监测仪）。除 CH4 外，全部 S5P 数据集都有近实时（NRTI）和离线（OFFL）两个版本，CH4 只有 OFFL 版。NRTI 资产覆盖面积比 OFFL 小，但采集后出现得更快；OFFL 资产是单轨数据（因半个地球处于黑夜，实际只含一个半球）。由于数据噪声，垂直柱值常出现负值，尤其在洁净区域或 SO2 排放低时；建议不要过滤这些负值，只剔除异常值（即垂直柱低于 -0.001 mol/m^2 的值）。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2018-07-10 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 1,113.2 米（约 1.11 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| O3_column_number_density | 地表至大气顶之间的 O3 总大气柱，用 [DOAS 算法](http://projects.knmi.nl/omi/research/product/product_generator.php?info=algo&product=Ozone&flavour=OMDOAO3&long=DOAS%20Total%20Ozone%20column)计算 | 1113.2 |  |
| O3_column_number_density_amf | 云与晴空空气质量因子的加权平均（以强度加权云量加权） | 1113.2 |  |
| O3_slant_column_number_density | 经环效应订正的 O3 斜柱数密度 | 1113.2 |  |
| O3_effective_temperature | 臭氧截面有效温度 | 1113.2 |  |
| cloud_fraction | 有效云量。见 [Sentinel 5P L2 输入/输出数据定义规范](https://sentinels.copernicus.eu/documents/247904/3119978/Sentinel-5P-Level-2-Input-Output-Data-Definition)，第 220 页 | 1113.2 |  |
| sensor_azimuth_angle | 地面像元处卫星的方位角（WGS84），自北向东量 | 1113.2 |  |
| sensor_zenith_angle | 地面像元处卫星的天顶角（WGS84），偏离垂直方向量 | 1113.2 |  |
| solar_azimuth_angle | 地面像元处太阳的方位角（WGS84），自北向东量 | 1113.2 |  |
| solar_zenith_angle | 地面像元处太阳的天顶角（WGS84），偏离垂直方向量（原英文说明误写为卫星天顶角） | 1113.2 |  |

## 能拿来做什么

- 臭氧总量与臭氧洞监测
- 紫外线暴露评估
- 平流层臭氧趋势研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_O3');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/NRTI/L3_O3`
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_O3

## 许可与引用

- 许可：proprietary
- 关键词：air-quality, atmosphere, copernicus, esa, eu, o3, ozone, pollution, s5p, sentinel, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [哨兵-5P 离线一氧化碳（L3）](/pages/0bd864c8/)
- [哨兵-5P 离线二氧化氮（L3）](/pages/7fe826cd/)
- [哨兵-5P 离线二氧化硫（L3）](/pages/eff44f62/)
- [哨兵-5P 离线云属性（L3）](/pages/f29bba93/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
