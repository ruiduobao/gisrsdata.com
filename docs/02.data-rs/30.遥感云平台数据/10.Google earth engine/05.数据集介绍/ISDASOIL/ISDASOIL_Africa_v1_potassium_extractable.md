---
title: "iSDAsoil 可提取钾"
date: 2026-11-03 12:00:00
permalink: /pages/7e5997d1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "africa"
  - "isda"
  - "potassium"
  - "soil"
---

# iSDAsoil 可提取钾

英文原名：iSDAsoil Extractable Potassium

## 这是什么数据

土壤深度 0–20 厘米和 20–50 厘米处的可提取钾，预测平均值和标准差。

像元值必须用 `exp(x/10)-1` 进行反变换。

在茂密丛林地区（一般在非洲中部），模型精度较低，因此可能看到条带（striping）等伪影。

土壤属性预测由 [Innovative Solutions for Decision Agriculture Ltd. (iSDA)](https://isda-africa.com/) 以 30 米像元大小使用机器学习结合遥感数据和超过 100,000 个已分析土壤样本的训练集制作。

更多信息见 [FAQ](https://www.isda-africa.com/isdasoil/faq/) 和[技术信息文档](https://www.isda-africa.com/isdasoil/technical-information/)。要提交问题或请求支持，请访问 [iSDAsoil 网站](https://isda-africa.com/isdasoil)。

## 覆盖范围与时间

- 覆盖范围：非洲
- 时间范围：2001-01-01 至 2017-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| mean_0_20 | 可提取钾，0–20 厘米深度处的预测平均值 | 30 |  |
| mean_20_50 | 可提取钾，20–50 厘米深度处的预测平均值 | 30 |  |
| stdev_0_20 | 可提取钾，0–20 厘米深度处的标准差 | 30 |  |
| stdev_20_50 | 可提取钾，20–50 厘米深度处的标准差 | 30 |  |

## 能拿来做什么

- 非洲土壤属性制图
- 精准农业决策
- 土地退化评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('ISDASOIL/Africa/v1/potassium_extractable');
```

- 数据集编号（Earth Engine ID）：`ISDASOIL/Africa/v1/potassium_extractable`
- 提供方：iSDA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ISDASOIL_Africa_v1_potassium_extractable

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：africa, isda, potassium, soil
- 数据引用：Hengl, T., Miller, M.A.E., Kri&zcaron;an, J., et al. African soil properties and nutrients
mapped at 30 m spatial resolution using two-scale ensemble machine learning.
Sci Rep 11, 6130 (2021).
[doi:10.1038/s41598-021-85639-y](https://doi.org/10.1038/s41598-021-85639-y)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [iSDAsoil Bulk Density, <2mm Fraction](/pages/9e6d23d2/)
- [iSDAsoil Clay Content](/pages/b359c603/)
- [iSDAsoil Depth to Bedrock](/pages/d2d6b77f/)
- [iSDAsoil Effective Cation Exchange Capacity](/pages/c734392b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
