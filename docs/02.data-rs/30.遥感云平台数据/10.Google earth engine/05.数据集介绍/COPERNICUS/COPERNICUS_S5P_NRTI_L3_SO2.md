---
title: "哨兵-5P 近实时二氧化硫（L3）"
date: 2026-11-03 12:00:00
permalink: /pages/3e5d31e9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-quality"
  - "atmosphere"
  - "bira"
  - "copernicus"
  - "dlr"
  - "esa"
  - "eu"
  - "pollution"
  - "s5p"
  - "sentinel"
  - "so2"
  - "sulfur-dioxide"
---

# 哨兵-5P 近实时二氧化硫（L3）

英文原名：Sentinel-5P NRTI SO2: Near Real-Time Sulfur Dioxide

## 这是什么数据

本数据集提供大气二氧化硫（SO2）浓度的近实时高分辨率影像。

二氧化硫（SO2）通过自然和人为过程进入地球大气。它在局地和全球尺度的化学中起作用，影响从短期污染到气候效应。只有约 30% 的 SO2 排放来自自然源，大部分是人为源。SO2 排放危害人体健康和空气质量。SO2 通过形成硫酸盐气溶胶产生辐射强迫，影响气候。火山 SO2 排放连同火山灰也会威胁航空安全。S5P/TROPOMI 以 1 天重访周期、前所未有的 3.5×7 公里空间分辨率采样地表，能分辨精细细节，包括探测小得多的 SO2 羽流。[更多信息。](https://www.tropomi.eu/data-products/sulfur-dioxide)

NRTI L3 产品的格网化使用 [harpconvert](https://stcorp.github.io/harp/doc/html/harpconvert.html) 完成。

哨兵-5 先导星是欧洲空间局于 2017 年 10 月 13 日发射的空气污染监测卫星，星上传感器常被称为 Tropomi（对流层监测仪）。除 CH4 外，全部 S5P 数据集都有近实时（NRTI）和离线（OFFL）两个版本，CH4 只有 OFFL 版。NRTI 资产覆盖面积比 OFFL 小，但采集后出现得更快；OFFL 资产是单轨数据（因半个地球处于黑夜，实际只含一个半球）。由于数据噪声，垂直柱值常出现负值，尤其在洁净区域或 SO2 排放低时；建议不要过滤这些负值，只剔除异常值（即垂直柱低于 -0.001 mol/m^2 的值）。

原始哨兵-5P 二级（L2）数据按时间分箱，而不是按经纬度。为摄入 Earth Engine，每个 L2 产品被转换为 L3，每轨保留一个网格（不跨产品聚合）；跨越反经线的源产品摄入为后缀 _1、_2 的两个资产。L3 转换由 [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html) 工具用 bin_spatial 操作完成。源数据会过滤掉 QA 值低于以下阈值的像元：AER_AI 为 80%；NO2 的 tropospheric_NO2_column_number_density 波段为 75%；除 O3 和 SO2 外的其他数据集为 50%。O3_TCL 产品直接摄入（不运行 harpconvert）。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2018-07-10 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 1,113.2 米（约 1.11 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| SO2_column_number_density | 地面处 SO2 垂直柱密度（用 DOAS 技术计算） | 1113.2 |  |
| SO2_column_number_density_amf | 云与晴空空气质量因子的加权平均（以强度加权云量加权） | 1113.2 |  |
| SO2_slant_column_number_density | 经环效应订正的 SO2 斜柱数密度 | 1113.2 |  |
| cloud_fraction | 有效云量。见 [Sentinel 5P L2 输入/输出数据定义规范](https://sentinels.copernicus.eu/documents/247904/3119978/Sentinel-5P-Level-2-Input-Output-Data-Definition)，第 220 页 | 1113.2 |  |
| sensor_azimuth_angle | 地面像元处卫星的方位角（WGS84），自北向东量 | 1113.2 |  |
| sensor_zenith_angle | 地面像元处卫星的天顶角（WGS84），偏离垂直方向量 | 1113.2 |  |
| solar_azimuth_angle | 地面像元处太阳的方位角（WGS84），自北向东量 | 1113.2 |  |
| solar_zenith_angle | 地面像元处太阳的天顶角（WGS84），偏离垂直方向量（原英文说明误写为卫星天顶角） | 1113.2 |  |
| SO2_column_number_density_15km | 15 公里高度处 SO2 垂直柱密度（用 DOAS 技术计算） | 1113.2 |  |

## 能拿来做什么

- 火山 SO2 羽流监测与航空安全
- 工业与航运排放追踪
- 空气质量与酸沉降研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_SO2');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/NRTI/L3_SO2`
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_SO2

## 许可与引用

- 许可：proprietary
- 关键词：air-quality, atmosphere, bira, copernicus, dlr, esa, eu, pollution, s5p, sentinel, so2, sulfur-dioxide, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [哨兵-5P 离线一氧化碳（L3）](/pages/0bd864c8/)
- [哨兵-5P 离线二氧化氮（L3）](/pages/7fe826cd/)
- [哨兵-5P 离线二氧化硫（L3）](/pages/eff44f62/)
- [哨兵-5P 离线云属性（L3）](/pages/f29bba93/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
