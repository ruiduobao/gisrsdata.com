---
title: "LandScan 高清人口数据：乌克兰（2022 年 1 月）"
date: 2026-11-03 12:00:00
permalink: /pages/c7a57ce4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "landscan"
  - "population"
  - "ukraine"
---

# LandScan 高清人口数据：乌克兰（2022 年 1 月）

英文原名：LandScan High Definition Data for Ukraine, January 2022

## 这是什么数据

[LandScan 高清（HD）](https://landscan.ornl.gov)提供 3 角秒（约 100 米）分辨率的格网人口估计。每个 LandScan HD 单元格的值代表环境（即 24 小时平均）人口计数估计。这样，数据刻画的是人们在昼夜全天完整的潜在活动空间，而不只是居住位置。LandScan HD 模型整合来自多种来源的最新土地利用与基础设施数据，应用 ORNL 人口密度表（PDT）项目的设施占用率估计，并利用 ORNL 开发的新型图像处理算法，在高性能计算环境中快速绘制建筑结构与邻里区域。

该数据开发所用的国家以下人口计数来源为[乌克兰国家统计局](https://ukrstat.org/en/operativ/operativ2021/ds/kn/arh_kn2021_e.html)。

这些国家以下估计已按 [CIA World Factbook](https://www.cia.gov/the-world-factbook/countries/ukraine/#people-and-society) 提供的全国总人口进行调整。

## 覆盖范围与时间

- 覆盖范围：乌克兰
- 时间范围：2022-01-01 至 2022-02-01

## 分辨率与规格

- 空间分辨率：约 100 米（3 角秒格网）
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| population | 24 小时平均人口计数估计 | 100 |  |

## 能拿来做什么

- 乌克兰人口空间分布分析（2022 年 1 月）
- 人道主义响应与人口暴露评估
- 昼夜人口活动空间研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('DOE/ORNL/LandScan_HD/Ukraine_202201');
```

- 数据集编号（Earth Engine ID）：`DOE/ORNL/LandScan_HD/Ukraine_202201`
- 提供方：Oak Ridge National Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/DOE_ORNL_LandScan_HD_Ukraine_202201

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：landscan, population, ukraine
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球网格人口 GPWv4.11：人口密度](/pages/f230ed9d/)
- [全球网格人口 GPWv4.11：人口计数](/pages/9cd921b2/)
- [全球网格人口 GPWv4.11：国家标识网格](/pages/425f6eb9/)
- [全球网格人口 GPWv4.11：基本人口特征（年龄与性别）](/pages/012ffc59/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
