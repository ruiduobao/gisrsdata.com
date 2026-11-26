---
title: "巴西 SPOT 多光谱影像（2007–2009，原始）"
date: 2026-11-03 12:00:00
permalink: /pages/0f610d9b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brazil"
  - "forest-code"
  - "google"
  - "multispectral"
  - "satellite-imagery"
  - "spot"
---

# 巴西 SPOT 多光谱影像（2007–2009，原始）

英文原名：SPOT Multispectral Imagery 10-20m, Brazil

## 这是什么数据

这是 SPOT 2、4、5 卫星在 2008 年前后拍摄的巴西原始多光谱影像。这三颗由法国国家空间研究中心（CNES）运营的卫星专为高分辨率、大范围对地观测设计，用于地球资源管理：SPOT 2、4 用 HRV、HRVIR 推扫式传感器，幅宽 60 公里；SPOT 5 的 HRG 仪器把多光谱分辨率提高到 10 米。这套原始影像可用于历史环境分析，例如对照[巴西森林法](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm)的核查。另见 [Brazil Forest Imagery Dataset 2008: Analytic Basemap](https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_BRAZIL_FOREST_2008_V1_ANALYTIC)。

云掩膜可以从配套的伪自然色集合 [MS_NC collection](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1) 链接过来。获取这份数据需先填写[申请表](https://forms.gle/jQmCbWgarjENQBYz6)。

## 覆盖范围与时间

- 覆盖范围：巴西
- 时间范围：2007-01-01 至 2009-11-26

## 分辨率与规格

- 空间分辨率：约 20 米（SPOT 5 为 10 米，SPOT 2/4 为 20 米）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| G | 绿光（0.50–0.59 µm） | 20 |  |
| R | 红光（0.61–0.68 µm） | 20 |  |
| N | 近红外（0.78–0.89 µm） | 20 |  |
| S | 短波近红外（1.53–1.78 µm），SPOT 4/5 可用 | 20 |  |

## 能拿来做什么

- 做 2008 年前后巴西森林与土地覆盖的历史分析
- 对照巴西森林法做毁林合规核查
- 计算植被指数等定量分析（原始多光谱波段）

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS/V1');
```

- 数据集编号（Earth Engine ID）：`AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS/V1`
- 提供方：Google/CNES、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1

## 许可与引用

- 许可：proprietary
- 关键词：brazil, forest-code, google, multispectral, satellite-imagery, spot
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [巴西 SPOT 全色影像（2007–2009）](/pages/1b153ba6/)
- [巴西 SPOT 全色锐化伪自然色影像（2007–2009）](/pages/592f745a/)
- [巴西 SPOT 多光谱伪自然色影像（2007–2009）](/pages/1f2f6c63/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
