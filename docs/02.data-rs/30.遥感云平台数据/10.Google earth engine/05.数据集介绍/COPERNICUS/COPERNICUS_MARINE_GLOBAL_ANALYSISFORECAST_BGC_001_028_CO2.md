---
title: "哥白尼全球海洋生物地球化学预报 CO2（表层二氧化碳分压）"
date: 2026-11-03 12:00:00
permalink: /pages/6e230781/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "daily"
  - "forecast"
  - "oceans"
---

# 哥白尼全球海洋生物地球化学预报 CO2（表层二氧化碳分压）

英文原名：Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2

## 这是什么数据

Mercator Ocean 运行的全球海洋生物地球化学分析与预报系统（1/4 度）提供 10 天的全球海洋三维预报，每周更新。时间序列经时间聚合，形成两整年的滑动窗口。本产品包含全球海洋生物地球化学参数的逐日与逐月平均文件（叶绿素、硝酸盐、磷酸盐、硅酸盐、溶解氧、溶解铁、初级生产、浮游植物、浮游动物、pH 和表层二氧化碳分压），水平分辨率 1/4 度、规则经纬度等距圆柱投影。

本数据集的内容是表层二氧化碳分压。

## 覆盖范围与时间

- 覆盖范围：全球海洋
- 时间范围：2022-01-01 至 2025-09-19

## 分辨率与规格

- 空间分辨率：约 27,750 米（约 27.75 公里（1/4 度））
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| spco2_depth1 | 表层二氧化碳分压 | 27750 |  |

## 能拿来做什么

- 海气二氧化碳交换与碳循环研究
- 海洋碳吸收监测
- 10 天尺度的短期预报应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/CO2');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/CO2`
- 提供方：Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CO2

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：copernicus, daily, forecast, oceans
- 数据引用：E.U. Copernicus Marine Service Information.
[https://doi.org/10.48670/moi-00015](https://doi.org/10.48670/moi-00015)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球海洋水色光学产品（多源，4 公里，月度）](/pages/b4a5e847/)
- [全球海洋水色初级生产产品（多源，4 公里）](/pages/6396836c/)
- [全球海洋水色反射率产品（OLCI，300 米）](/pages/f4ffb7b4/)
- [全球海洋水色反射率产品（多源，4 公里）](/pages/472dc170/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
