---
title: "哥白尼海洋物理二维逐日平均场"
date: 2026-11-03 12:00:00
permalink: /pages/208ecbda/
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

# 哥白尼海洋物理二维逐日平均场

英文原名：Global Ocean Physics Analysis and Forecast Daily

## 这是什么数据

哥白尼海洋物理二维逐日平均场（cmems_mod_glo_phy_anfc_0.083deg_P1D-m）提供全球逐日平均的海洋表面与海底变量，分辨率 8 公里。

Mercator 运行的全球海洋分析与预报系统提供 10 天的全球海洋二维预报，每日更新。时间序列经时间聚合，形成两整年的滑动窗口。本产品包含全球海洋自表层至海底的温度、盐度、海流、海平面、混合层深度和海冰参数的逐日平均文件。

## 覆盖范围与时间

- 覆盖范围：全球海洋
- 时间范围：2022-06-01 至 2026-11-06

## 分辨率与规格

- 空间分辨率：约 9,276.62 米（约 9.28 公里（0.083 度网格，标称 8 公里））
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sialb | 海冰平均反照率 | 9276.62 |  |
| siage | 海冰平均冰龄 | 9276.62 |  |
| siconc | 海冰密集度 | 9276.62 |  |
| ist | 海冰表面温度 | 9276.62 |  |
| sivelo | 海冰速度 | 9276.62 |  |
| sithick | 海冰厚度 | 9276.62 |  |
| sisnthick | 海冰表面雪厚 | 9276.62 |  |
| mlotst | 混合层深度 | 9276.62 |  |
| pbo | 海底海水压力 | 9276.62 |  |
| sob | 海底盐度 | 9276.62 |  |
| zos | 海面高度 | 9276.62 |  |
| tob | 海底温度 | 9276.62 |  |
| usi | 海冰东向速度 | 9276.62 |  |
| vsi | 海冰北向速度 | 9276.62 |  |

## 能拿来做什么

- 全球海洋逐日的海表与海底物理状态
- 海冰监测（密集度、厚度、速度、积雪）
- 海洋分析与 10 天预报应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_PHY_DAILY');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_PHY_DAILY`
- 提供方：Copernicus Marine Service、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：copernicus, daily, forecast, oceans
- 数据引用：E.U. Copernicus Marine Service Information (2024). Global Ocean Physics Analysis and Forecast.
[doi:10.48670/moi-00016](https://doi.org/10.48670/moi-00016)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球海洋水色光学产品（多源，4 公里，月度）](/pages/b4a5e847/)
- [全球海洋水色初级生产产品（多源，4 公里）](/pages/6396836c/)
- [全球海洋水色反射率产品（OLCI，300 米）](/pages/f4ffb7b4/)
- [全球海洋水色反射率产品（多源，4 公里）](/pages/472dc170/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
