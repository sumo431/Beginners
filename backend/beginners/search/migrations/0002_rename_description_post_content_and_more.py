# Generated by Django 5.1.3 on 2024-11-06 05:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('search', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='description',
            new_name='content',
        ),
        migrations.RemoveField(
            model_name='post',
            name='created_at',
        ),
    ]
