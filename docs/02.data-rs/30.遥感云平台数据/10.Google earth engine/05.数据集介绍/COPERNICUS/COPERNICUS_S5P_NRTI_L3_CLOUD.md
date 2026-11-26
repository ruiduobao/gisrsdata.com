---
title: "哨兵-5P 近实时云属性（L3）"
date: 2026-11-03 12:00:00
permalink: /pages/1637d632/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "cloud"
  - "copernicus"
  - "dlr"
  - "esa"
  - "eu"
  - "s5p"
  - "sentinel"
  - "tropomi"
---

# 哨兵-5P 近实时云属性（L3）

英文原名：Sentinel-5P NRTI CLOUD: Near Real-Time Cloud Properties

## 这是什么数据

本数据集提供云参数的近实时高分辨率影像。

TROPOMI/S5P 云属性反演基于 OCRA 和 ROCINN 算法——它们目前用于业务化的 GOME 和 GOME-2 产品。OCRA 用紫外/可见光波段的测量反演云量；ROCINN 用 760 纳米氧 A 波段内外的测量反演云高（气压）和光学厚度（反照率）。所用算法为 3.0 版，把云更真实地处理为光学均匀的光散射粒子层。此外，云参数还按另一种云模型提供：把云假定为朗伯反射边界。[更多信息。](http://www.tropomi.eu/data-products/cloud)

NRTI L3 产品的格网化使用 [harpconvert](https://stcorp.github.io/harp/doc/html/harpconvert.html) 完成。

哨兵-5 先导星是欧洲空间局于 2017 年 10 月 13 日发射的空气污染监测卫星，星上传感器常被称为 Tropomi（对流层监测仪）。除 CH4 外，全部 S5P 数据集都有近实时（NRTI）和离线（OFFL）两个版本，CH4 只有 OFFL 版。NRTI 资产覆盖面积比 OFFL 小，但采集后出现得更快；OFFL 资产是单轨数据（因半个地球处于黑夜，实际只含一个半球）。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2018-07-05 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 1,113.2 米（约 1.11 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| cloud_fraction | 反演的有效辐射云量 | 1113.2 |  |
| cloud_top_pressure | 反演的云顶处大气压 | 1113.2 |  |
| cloud_top_height | 反演的云顶高度 | 1113.2 |  |
| cloud_base_pressure | 云底气压 | 1113.2 |  |
| cloud_base_height | 云底高度 | 1113.2 |  |
| cloud_optical_depth | 反演的云光学厚度 | 1113.2 |  |
| surface_albedo | 地表反照率 | 1113.2 |  |
| sensor_azimuth_angle | 地面像元处卫星的方位角（WGS84），自北向东量 | 1113.2 |  |
| sensor_zenith_angle | 地面像元处卫星的天顶角（WGS84），偏离垂直方向量 | 1113.2 |  |
| solar_azimuth_angle | 地面像元处太阳的方位角（WGS84），自北向东量 | 1113.2 |  |
| solar_zenith_angle | 地面像元处太阳的天顶角（WGS84），偏离垂直方向量（原英文说明误写为卫星天顶角） | 1113.2 |  |

## 能拿来做什么

- 大气反演所需的云量、云高与云光学厚度
- 痕量气体分析中的云像元筛除
- 高空间分辨率的云气候学

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_CLOUD');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/NRTI/L3_CLOUD`
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_CLOUD

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, cloud, copernicus, dlr, esa, eu, s5p, sentinel, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [哨兵-5P 离线一氧化碳（L3）](/pages/0bd864c8/)
- [哨兵-5P 离线二氧化氮（L3）](/pages/7fe826cd/)
- [哨兵-5P 离线二氧化硫（L3）](/pages/eff44f62/)
- [哨兵-5P 离线云属性（L3）](/pages/f29bba93/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
