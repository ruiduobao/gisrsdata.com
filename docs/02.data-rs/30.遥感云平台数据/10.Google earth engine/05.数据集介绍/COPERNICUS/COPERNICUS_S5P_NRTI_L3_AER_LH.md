---
title: "哨兵-5P 近实时紫外气溶胶层高度（L3）"
date: 2026-11-03 12:00:00
permalink: /pages/0d7ed24f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "air-quality"
  - "alh"
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

# 哨兵-5P 近实时紫外气溶胶层高度（L3）

英文原名：Sentinel-5P NRTI AER LH: Near Real-Time UV Aerosol Layer Height

## 这是什么数据

本数据集提供紫外气溶胶指数（UVAI，亦称吸收层高度 ALH）的高分辨率影像。（原英文简介作「offline」，与产品标题的近实时口径不一致，此处如实注明。）

ALH 对云污染非常敏感。但气溶胶与云难以区分，因此对全部 FRESCO 有效云量小于 0.05 的像元都计算 ALH。FRESCO 和 VIIRS 提供云掩膜，强烈建议用它们过滤残余云。另有太阳耀斑掩膜可筛除耀斑区域（事先不做过滤）。

已知高地表反照率会负面影响 ALH，使其偏向地表。一般认为，（暗）海洋上空的 ALH 精度在 1000 米或 100 百帕的要求之内；陆地上空、尤其是明亮表面，精度可能更低，不建议在沙漠等明亮表面使用 ALH 产品。

本 L3 AER_LH 产品的 aerosol_mid_pressure 用 354 纳米和 388 纳米一对测量计算。[COPERNICUS/S5P/OFFL/L3_SO2](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_SO2) 产品的 absorbing_aerosol_index 则用 340 纳米和 380 纳米波长计算。

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
| aerosol_height | 气溶胶层气压用合适的温度廓线（即反演所用的温度廓线）换算成的气溶胶层高度，相对大地水准面 | 1113.2 |  |
| aerosol_pressure | 假定气溶胶层的气压（假定气压厚度（目前）为 50 百帕，气溶胶体积消光系数与单次散射反照率恒定） | 1113.2 |  |
| aerosol_optical_depth | 假定气溶胶层的气溶胶光学厚度 τ（适用于 760 纳米） | 1113.2 |  |
| sensor_azimuth_angle | 地面像元处卫星的方位角（WGS84），自北向东量 | 1113.2 |  |
| sensor_zenith_angle | 地面像元处卫星的天顶角（WGS84），偏离垂直方向量 | 1113.2 |  |
| solar_azimuth_angle | 地面像元处太阳的方位角（WGS84），自北向东量 | 1113.2 |  |
| solar_zenith_angle | 地面像元处太阳的天顶角（WGS84），偏离垂直方向量（原英文说明误写为卫星天顶角） | 1113.2 |  |

## 能拿来做什么

- 沙尘与烟尘层的高度，供扩散建模使用
- 与航空相关的火山灰与气溶胶层信息
- 需要羽流高度的空气质量分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_AER_LH');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/NRTI/L3_AER_LH`
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_AER_LH

## 许可与引用

- 许可：proprietary
- 关键词：aerosol, air-quality, alh, atmosphere, copernicus, esa, eu, knmi, pollution, s5p, sentinel, tropomi, uvai
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [哨兵-5P 离线一氧化碳（L3）](/pages/0bd864c8/)
- [哨兵-5P 离线二氧化氮（L3）](/pages/7fe826cd/)
- [哨兵-5P 离线二氧化硫（L3）](/pages/eff44f62/)
- [哨兵-5P 离线云属性（L3）](/pages/f29bba93/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
