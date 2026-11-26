---
title: "美国 BLM 土地健康野外样地数据（AIM TerrADat）"
date: 2026-11-03 12:00:00
permalink: /pages/53c74382/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aim"
  - "biota"
  - "blm"
  - "ecosystems"
  - "endangered"
  - "environment"
  - "grsg"
  - "health"
  - "hydrology"
  - "landscape"
  - "range"
  - "soil"
---

# 美国 BLM 土地健康野外样地数据（AIM TerrADat）

英文原名：BLM AIM TerrADat TerrestrialAIM Point v1

## 这是什么数据

这是美国土地管理局（BLM）自 2011 年起按其「评估、清查与监测」（AIM）战略在野外样地实测的一套土地健康数据。BLM 土地上已采集 6,000 多个陆地 AIM 样地，档案每年更新。每个样地按统一规程记录一套核心指标，都与草原健康直接相关：生物完整性、土壤与立地稳定性、水文功能。实测内容包括裸地覆盖比例、植被组成与高度、需关注的管理物种、外来入侵物种、植株冠层空隙、物种丰富度和土壤团聚体稳定性。这是美国西部联邦土地上公开可得的最大规模样地实测数据集之一，可以和遥感影像等地理数据结合做分析、分类与验证。

这套数据用于按 BLM 政策监测其管辖资源的状态、状况与趋势。采集方法见 [Landscape Toolbox](https://landscapetoolbox.org) 和《监测手册》第 2 版。注意：不了解抽样设计、或不按抽样设计计算样点的空间权重时，不要用这套数据做统计或空间推断。

数据由 BLM 各地办公室、区局及合作野外队按 BLM 陆地核心[采集规程](https://www.ntc.blm.gov/krc/viewresource.php?courseID=281&programAreaId=148)采集，用 [DIMA（清查、监测与评估数据库）](https://jornada.nmsu.edu/tools/dima) 电子录入，存入 BLM 国家运营中心的 TerrADat 中央数据库，并经过严格的质量控制。

## 覆盖范围与时间

- 覆盖范围：美国土地管理局（BLM）管辖土地，主要在美国西部
- 时间范围：2011-05-10 至 2016-12-06
- 更新节奏：档案每年更新

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| BareSoilCover_FH | DOUBLE | 样地内土壤的基部覆盖，不包括上方有植被遮盖的土壤（例如鼠尾草上方遮住的裸土不计入）。该指标由线点截距法测得（每样地 3 条样线、150 个点）。 |
| DateEstablished | STRING | 样地在 DIMA 中建立的日期，格式 YYYY/MM/DD HH:MM:SS |
| DateLoadedInDb | STRING | 数据库 DIMA 上传到 TerrADat 的日期。遵循标准日期，但随采集年份变化（YYYY-09-01）。 |
| DateVisited | STRING | 实地采集数据的日期，格式 YYYY/MM/DD HH:MM:SS |
| EcologicalSiteId | STRING | 生态立地唯一 ID。NRCS 将其定义为「一种独特的土地，具有区别于其他土地的特性，能产出种类和数量独特的植被」。ID 来自 [Ecological Site Information System](https://esis.sc.egov.usda.gov/)。 |
| GapPct_25_50 | DOUBLE | 植株冠层间空隙为 25–50 厘米的面积占样地土壤表面的百分比。用 GAP 截距法测得（每样地 3 条样线）。 |
| GapPct_51_100 | DOUBLE | 植株冠层间空隙为 50–100 厘米的面积占样地土壤表面的百分比。用 GAP 截距法测得（每样地 3 条样线）。 |
| GapPct_101_200 | DOUBLE | 植株冠层间空隙为 101–200 厘米的面积占样地土壤表面的百分比。用 GAP 截距法测得（每样地 3 条样线）。 |
| GapPct_200_plus | DOUBLE | 植株冠层间空隙大于 200 厘米的面积占样地土壤表面的百分比。用 GAP 截距法测得（每样地 3 条样线）。 |
| GapPct_25_plus | DOUBLE | 植株冠层间空隙大于 25 厘米的面积占样地土壤表面的百分比。用 GAP 截距法测得（每样地 3 条样线）。 |
| HerbaceousHgt_Avg | DOUBLE | 样地内草本植物的平均高度。用植被高度法测得（3 条样线、30 个点）。 |
| InvAnnForbCover_AH | DOUBLE | 样地内外来入侵一年生草本的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| InvAnnForbGrassCover_AH | DOUBLE | 样地内外来入侵一年生草本与禾草的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| InvAnnGrassCover_AH | DOUBLE | 样地内外来入侵一年生禾草的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| InvPerenForbCover_AH | DOUBLE | 样地内外来入侵多年生草本的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| InvPerenForbGrassCover_AH | DOUBLE | 样地内外来入侵多年生草本与禾草的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| InvPerenGrassCover_AH | DOUBLE | 样地内外来入侵多年生禾草的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| InvPerenGrassHgt_Avg | DOUBLE | 样地内入侵多年生禾草的平均高度。用植被高度法测得（3 条样线、30 个点）。 |
| InvPlantCover_AH | DOUBLE | 样地内外来入侵植物的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| InvPlant_NumSp | DOUBLE | 在整个样地区域定时搜索（物种清查）发现的外来入侵植物物种数。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| InvShrubCover_AH | DOUBLE | 样地内外来入侵灌木的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| InvSubShrubCover_AH | DOUBLE | 样地内外来入侵半灌木的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| InvSucculentCover_AH | DOUBLE | 样地内外来入侵肉质植物的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| InvTreeCover_AH | DOUBLE | 样地内外来入侵乔木的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| NonInvAnnForbCover_AH | DOUBLE | 样地内非入侵一年生草本的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| NonInvAnnForbGrassCover_AH | DOUBLE | 样地内非入侵一年生草本与禾草的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| NonInvAnnGrassCover_AH | DOUBLE | 样地内非入侵一年生禾草的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| NonInvPerenForbCover_AH | DOUBLE | 样地内非入侵多年生草本的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| NonInvPerenForbGrassCover_AH | DOUBLE | 样地内非入侵多年生草本与禾草的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| NonInvPerenGrassCover_AH | DOUBLE | 样地内非入侵多年生禾草的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| NonInvPerenGrassHgt_Avg | DOUBLE | 样地内非入侵多年生禾草的平均高度。用植被高度法测得（3 条样线、30 个点）。 |
| NonInvShrubCover_AH | DOUBLE | 样地内非入侵灌木的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| NonInvSubShrubCover_AH | DOUBLE | 样地内非入侵半灌木的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| NonInvSucculentCover_AH | DOUBLE | 样地内非入侵肉质植物的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| NonInvTreeCover_AH | DOUBLE | 样地内非入侵乔木的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。入侵状态与生长型由当地自然资源专家指定，常参考 USDA PLANTS 数据库。 |
| OtherShrubHgt_Avg | DOUBLE | 样地内艾灌丛松鸡偏好的非鼠尾草灌木的平均高度。USDA Plants 数据库中的其他灌木物种代码包括：AMAL2、AMUT、ATCO、CEVE、CHNA2、CHVI8、GRSP、GUSA2、JUOC、JUOS、KRLA2、PAMY、PUTR2、ROWE、SAVE4、SYAL、SYOR2 和 TECA2。用植被高度规程测得（3 条样线、30 个点）。 |
| PlotID | STRING | 采集数据的地点或样地名称，由数据采集者赋予，格式不一。不同 Site 和 Project 之间可能有重复的 Plot ID，但同一 Site 内不重复。每个 AIM 样地是以样点为中心、半径 55 米（直径 110 米）的圆，监测指标（数据集属性）在此范围内采集。样点按空间均衡抽样设计在目标推断范围内随机选取。多数属性沿 3 条长 50 或 25 米的样线采集，样线自中心点偏移 5 米起、以 0、120、240 度辐射状布设。 |
| PlotKey | STRING | 与每个样地位置关联的唯一数字 ID。样地在 DIMA 中首次创建时自动生成。后续对同一样地的访问一般沿用同一 Plot Key。 |
| PrimaryKey | STRING | 每个样地的唯一标识。包括 Plot Key 以及载入 TerrADat 的数据。 |
| ProjectName | STRING | 指采集该数据的更广项目区域。一般包括州、BLM 管理办公室和年份。 |
| SagebrushCover_AH | DOUBLE | 样地内鼠尾草的覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。USDA PLANTS 数据库中的鼠尾草物种代码包括：ARAR8; ARARL3; ARARL; ARNO4; ARARN; ARBI3; ARCAB3; ARBO5; ARCAC5; ARCAV2; ARCAV; ARFR4; ARPA16; ARPE6; ARPY2; ARRI2; PIDE4; ARSP5; ARTRS2; ARTRT; ARTRV; ARTRX; ARTRV; ARTRP4; ARTRW8; ARTRW; ARTRT2; ARTRR2; ARTRR4; 和 SPAR2。 |
| SagebrushHgt_Avg | DOUBLE | 样地内鼠尾草的平均高度。用植被高度法测得（3 条样线、30 个点）。USDA PLANTS 数据库中的鼠尾草物种代码包括：ARAR8; ARARL3; ARARL; ARNO4; ARARN; ARBI3; ARCAB3; ARBO5; ARCAC5; ARCAV2; ARCAV; ARFR4; ARPA16; ARPE6; ARPY2; ARRI2; PIDE4; ARSP5; ARTRS2; ARTRT; ARTRV; ARTRX; ARTRV; ARTRP4; ARTRW8; ARTRW; ARTRT2; ARTRR2; ARTRR4; 和 SPAR2。 |
| SiteID | STRING | 供数据采集者对样地分组使用，例如按类型或管理区。常见值是管理单元名称（如放牧分配地）或数据采集的主题（如复垦）。 |
| SoilStability_All | DOUBLE | 样地内全部样本的土壤团聚体稳定性平均值。用土壤团聚体稳定性测试测得（每样地最多 18 个样本）。该测试中稳定性从 1 到 6，1 最不稳定、6 最稳定。 |
| SoilStability_Protected | DOUBLE | 样地内植株冠层下样本的土壤团聚体稳定性平均值。用土壤团聚体稳定性测试测得（每样地最多 18 个样本）。该测试中稳定性从 1 到 6，1 最不稳定、6 最稳定。 |
| SoilStability_Unprotected | DOUBLE | 样地内植株冠层之间（上方无遮盖）样本的土壤团聚体稳定性平均值。用土壤团聚体稳定性测试测得（每样地最多 18 个样本）。该测试中稳定性从 1 到 6，1 最不稳定、6 最稳定。 |
| TotalFoliarCover_FH | DOUBLE | 样地内植物的叶冠层覆盖度。由线点截距法测得（每样地 3 条样线、150 个点）。 |
| WoodyHgt_Avg | DOUBLE | 样地内木本植物的平均高度。用植被高度法测得（3 条样线、30 个点）。 |

## 能拿来做什么

- 评估 BLM 土地的草原健康状况及其变化趋势
- 用实测样地数据验证、训练遥感分类结果
- 研究样地尺度的入侵物种、裸地与土壤稳定性

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('BLM/AIM/v1/TerrADat/TerrestrialAIM');
```

- 数据集编号（Earth Engine ID）：`BLM/AIM/v1/TerrADat/TerrestrialAIM`
- 提供方：US Department of Interior Bureau of Land Management (BLM)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM

## 许可与引用

- 许可：CC0-1.0
- 关键词：aim, biota, blm, ecosystems, endangered, environment, grsg, health, hydrology, landscape, range, soil, table, terradat, terrestrialaim, vegetation, wildlife
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球网格人口 GPWv4.11：水体掩膜](/pages/d70c6d97/)
- [全球网格人口 GPWv4.11：水域面积](/pages/0f13e587/)
- [Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1](/pages/0bb51b32/)
- [Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1](/pages/e1121614/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
