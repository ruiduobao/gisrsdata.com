---
title: "哨兵-5P 近实时紫外气溶胶指数（L3）"
date: 2026-11-03 12:00:00
permalink: /pages/df0df7d4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aai"
  - "aerosol"
  - "air-quality"
  - "atmosphere"
  - "copernicus"
  - "esa"
  - "eu"
  - "knmi"
  - "pollution"
  - "s5p"
  - "sentinel"
  - "tropomi"
---

# 哨兵-5P 近实时紫外气溶胶指数（L3）

英文原名：Sentinel-5P NRTI AER AI: Near Real-Time UV Aerosol Index

## 这是什么数据

本数据集提供紫外气溶胶指数（UVAI，也称吸收性气溶胶指数 AAI）的近实时高分辨率影像。

AAI 基于一对波长在紫外波段内瑞利散射随波长的变化：观测反射率与模拟反射率之差即得到 AAI。AAI 为正表示存在吸收紫外的气溶胶，如沙尘和烟尘。它适合追踪沙尘暴发、火山灰和生物质燃烧等事件性气溶胶羽流的演变。所用波长的臭氧吸收很低，所以与气溶胶光学厚度测量不同，AAI 在有云时也能计算，从而可以逐日全球覆盖。本 L3 AER_AI 产品的 absorbing_aerosol_index 用 354 纳米和 388 纳米一对测量计算。

NRTI L3 产品的格网化使用 [harpconvert](https://stcorp.github.io/harp/doc/html/harpconvert.html) 完成。

哨兵-5 先导星（Sentinel-5 Precursor）是欧洲空间局于 2017 年 10 月 13 日发射的监测空气污染的卫星，其星上传感器常被称为 Tropomi（对流层监测仪）。除 CH4 外，全部 S5P 数据集都有两个版本：近实时（NRTI）和离线（OFFL）；CH4 只有 OFFL 版。NRTI 资产覆盖面积比 OFFL 小，但采集后出现得更快。OFFL 资产包含单个轨道的数据（由于半个地球处于黑夜，实际只含一个半球的数据）。

由于数据噪声，垂直柱值常出现负值，尤其在洁净区域或 SO2 排放低时。建议不要过滤这些值，只剔除异常值，即垂直柱低于 -0.001 mol/m^2 的值。

原始哨兵-5P 二级（L2）数据按时间分箱，而不是按经纬度。为了能摄入 Earth Engine，每个 S5P L2 产品都被转换成 L3，每轨保留一个网格（不跨产品聚合）。跨越反经线的源产品摄入为两个 Earth Engine 资产，后缀为 _1 和 _2。L3 转换由 [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html) 工具用 bin_spatial 操作完成。源数据会过滤掉 QA 值低于以下阈值的像元：AER_AI 为 80%；NO2 的 tropospheric_NO2_column_number_density 波段为 75%；除 O3 和 SO2 外的其他数据集为 50%。O3_TCL 产品直接摄入（不运行 harpconvert）。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2018-07-10 至 2026-11-03

## 分辨率与规格

- 空间分辨率：约 1,113.2 米（约 1.11 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| absorbing_aerosol_index | 大气中气溶胶多少的度量。UVAI 基于一对给定波长在紫外（UV）波段的光谱对比：观测反射率与模拟反射率之差得到一个残差值。残差为正表示存在吸收紫外的气溶胶（如沙尘和烟尘），即吸收性气溶胶指数（AAI）。云的残差接近零，强负残差可能表示存在硫酸盐气溶胶等非吸收性气溶胶。与基于卫星的气溶胶光学厚度测量不同，AAI 在有云时也能计算，因此可以实现逐日全球覆盖，适合追踪沙漠沙尘、火山喷发灰和生物质燃烧烟尘等事件性气溶胶羽流的演变。更多细节见 [ATBD](https://sentinels.copernicus.eu/documents/247904/2476257/Sentinel-5P-TROPOMI-ATBD-UV-Aerosol-Index.pdf) | 1113.2 |  |
| sensor_altitude | 卫星相对大地星下点（WGS84）的高度 | 1113.2 |  |
| sensor_azimuth_angle | 地面像元处卫星的方位角（WGS84），自北向东量 | 1113.2 |  |
| sensor_zenith_angle | 地面像元处卫星的天顶角（WGS84），偏离垂直方向量 | 1113.2 |  |
| solar_azimuth_angle | 地面像元处太阳的方位角（WGS84），自北向东量 | 1113.2 |  |
| solar_zenith_angle | 地面像元处太阳的天顶角（WGS84），偏离垂直方向量（原英文说明误写为卫星天顶角） | 1113.2 |  |

## 能拿来做什么

- 近实时追踪沙尘、烟尘与火山灰羽流
- 用紫外吸收气溶胶探测做空气质量监测
- 云遮挡光学厚度产品时的事件分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_AER_AI');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/NRTI/L3_AER_AI`
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_AER_AI

## 许可与引用

- 许可：proprietary
- 关键词：aai, aerosol, air-quality, atmosphere, copernicus, esa, eu, knmi, pollution, s5p, sentinel, tropomi, uvai
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [哨兵-5P 离线一氧化碳（L3）](/pages/0bd864c8/)
- [哨兵-5P 离线二氧化氮（L3）](/pages/7fe826cd/)
- [哨兵-5P 离线二氧化硫（L3）](/pages/eff44f62/)
- [哨兵-5P 离线云属性（L3）](/pages/f29bba93/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
